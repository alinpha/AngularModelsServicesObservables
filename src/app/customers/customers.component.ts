import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer[] = []
  selectedCustomer:Customer;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(c => {
      this.customers = c;
    });
  }

  getCustomer(id:number) {
    this.customerService.getCustomer(id).subscribe(c => {
      this.selectedCustomer = c;
    });
  }

}
