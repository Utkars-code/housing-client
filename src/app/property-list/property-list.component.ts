import { HousingService } from './../services/housing.service';

import { Component, OnInit } from '@angular/core';
import { IProperty } from './Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit{

  properties!: Array<IProperty>;
  SellRent=1;
 //properties: any;


constructor(private route: ActivatedRoute,private housingservice:HousingService){}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2; //means we are no rent -property URL else we arw on base URl.
    }
  //// this.http.get('data/properties.json').subscribe(
 this.housingservice.getalldata(this.SellRent).subscribe(
  data=>{
    this.properties = data;
    console.log(data);

  },
 error =>{
  console.log('http error');
  console.log(error);
 }
)
  }
}

