import { IProperty } from './../../property-list/Iproperty.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})

export class PropertyCardComponent {


  @Input() property!: IProperty;

// this is string interpolutions-->

}
