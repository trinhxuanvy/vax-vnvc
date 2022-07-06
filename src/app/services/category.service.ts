import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../config/interfaces';
import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(API_URL + '/category');
  }
}
