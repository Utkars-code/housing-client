import { IProperty } from './../property-list/Iproperty.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getalldata(SellRent: number) {
    return this.http.get('data/properties.json').pipe(
      map((data: Object) => {
        const propertiesArray: IProperty[] = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && (data as { [key: string]: IProperty })[id].SellRent === SellRent) {
            propertiesArray.push((data as { [key: string]: IProperty })[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  data(data: any) {
    throw new Error('Method not implemented.');
  }


}
