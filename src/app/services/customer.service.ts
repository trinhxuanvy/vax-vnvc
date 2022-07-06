import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models';
import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomerByCode(code: string): Observable<Customer> {
    return this.http.get<Customer>(API_URL + '/customer/code/' + code);
  }

  addCustomer(data: Customer): Observable<any> {
    return this.http.post<any>(API_URL + '/customer', data);
  }
}
