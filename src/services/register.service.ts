import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpProxyService } from './http-proxy.service';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/models/register-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl: string = environment.url;


  constructor(private http: HttpProxyService) { }

  public register(user: any) {
    return this.http.post(this.baseUrl + 'user/register', user);
  }

}
