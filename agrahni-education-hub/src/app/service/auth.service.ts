import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = '192.168.1.15:4000'
  baseUrl: string = 'http://' + this.domain;
  apiUrl: string = this.baseUrl + '/api/v1';
  httpOptions: any;

  constructor(private http: HttpClient) { }
  getapi(url: string): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(this.apiUrl+url, this.httpOptions);
  }

  postAPI(url: any, params: any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.apiUrl + url, params, this.httpOptions);
  }
}
