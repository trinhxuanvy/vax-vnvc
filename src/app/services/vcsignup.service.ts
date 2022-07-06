import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VCSignup } from '../models/VCSignUp';
import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class VcsignupService {
  constructor(private http: HttpClient) {}

  registerVC(data: VCSignup): Observable<any> {
    return this.http.post<any>(API_URL + '/vcsignup', data);
  }
}
