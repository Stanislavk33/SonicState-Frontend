import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {

    constructor(private http: HttpClient) { }

    public get<T>(url: string): Observable<T> {
      const headers = this.defaultHeaders();
      return this.http.get<T>(url, { headers });
    }

    public post<T>(url: string, data: any): Observable<T> {
      const headers = this.defaultHeaders();

      return this.http.post<T>(url, data, { headers });
    }

    private defaultHeaders(): HttpHeaders {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

      return headers;
    }

    public filePost<T>(url: string, data: any): Observable<T> {
      let headers = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
      return this.http.post<T>(url, data, {headers});
    }

    public getToken():string{
      return localStorage.getItem('token');
  }

    private fileHeaders(): HttpHeaders {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

      return headers;
    }

  }

