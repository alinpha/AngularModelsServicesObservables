//add input module to allow parameters to be passed to this component
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer:Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
