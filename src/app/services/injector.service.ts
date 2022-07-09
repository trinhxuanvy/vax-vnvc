import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector } from '../models';
import { stringify } from 'query-string';
import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class InjectorService {
  constructor(private http: HttpClient) {}

  getInjectorByCode(query: { code: string }): Observable<Injector> {
    return this.http.get<any>(
      API_URL + '/injector/customer/code?' + stringify(query)
    );
  }
}
