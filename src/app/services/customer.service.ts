import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';//observeables used for async
import { CUSTOMER_LIST } from '../mocks/customer-mocks';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  /**
   * @returns observable customer array, observables are async pattern
   */
  getCustomers() : Observable<Customer[]> {
    return of(CUSTOMER_LIST);//sync
  }

  getCustomer(id:number) : Observable<Customer>{
    const c = CUSTOMER_LIST.find(c=>c.id === id);
    return of(c);
  }
}
