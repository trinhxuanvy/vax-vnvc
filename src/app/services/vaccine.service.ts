import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntitiesList, Vacxin } from '../models';
import { API_URL } from '../config/api';
import { QuerySearchObject } from '../config/interfaces';
import { stringify } from 'query-string';

@Injectable({
  providedIn: 'root',
})
export class VaccineService {
  constructor(private http: HttpClient) {}

  getVaccins(query: QuerySearchObject): Observable<EntitiesList<Vacxin>> {
    const final: QuerySearchObject = {};
    console.log(query);
    if (query.categoryId) {
      final.categoryId = query.categoryId;
    }
    if (query.search) {
      final.search = query.search;
    }
    if (query.type) {
      final.type = query.type;
    }
    return this.http.get<EntitiesList<Vacxin>>(
      API_URL + '/vaccine?' + stringify(final)
    );
  }

  getVaccinById(id: string): Observable<Vacxin> {
    return this.http.get<Vacxin>(API_URL + '/vaccine/' + id);
  }
}
