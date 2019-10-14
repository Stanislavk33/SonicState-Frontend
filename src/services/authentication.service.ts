import { HttpProxyService } from 'src/services/http-proxy.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser } from 'src/models/login-user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = environment.url;
  public isAuthorised: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private httpService: HttpProxyService) {
    this.isAuthorised = new BehaviorSubject<boolean>(this.isAuth());
  }

  private isAuth() {
    if (this.httpService.getToken() === null) {return false; }
    else { return true; }
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public logout(): void {
    localStorage.setItem('token', null);
    this.isAuthorised.next(false);
  }

  public login(user: LoginUser): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.isAuthorised.next(true);
    return this.http.post(this.baseUrl + 'user/login', user, { headers, responseType: 'text' });
  }
}
