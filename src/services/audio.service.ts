import { HttpProxyService } from 'src/services/http-proxy.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AudioDetails } from 'src/models/audio-details';


@Injectable({
  providedIn: 'root'
})

export class AudioService {
  private baseUrl: string = environment.url;

  constructor(private http: HttpProxyService) { }

  public getAll(): Observable<AudioDetails[]> {
      return this.http.get<AudioDetails[]>(this.baseUrl + 'audio/list');
  }

   public upload(data: any) {
     return this.http.filePost(this.baseUrl + 'audio/upload' , data);
  }
}
