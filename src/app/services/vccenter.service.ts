import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntitiesList, VCCenter } from '../models';
import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class VccenterService {
  constructor(private http: HttpClient) {}

  getAllCenter(): Observable<EntitiesList<VCCenter>> {
    return this.http.get<EntitiesList<VCCenter>>(API_URL + '/vccenter');
  }
}
