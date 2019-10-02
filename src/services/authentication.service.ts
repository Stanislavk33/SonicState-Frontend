import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser } from 'src/models/login-user';
import { HttpProxyService } from './http-proxy.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = environment.url;

  constructor(private http: HttpClient) { }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }


  public login(user: LoginUser): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post( this.baseUrl + 'user/login', user, {headers, responseType: 'text'});
 }
}
