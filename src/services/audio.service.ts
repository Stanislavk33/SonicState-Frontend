import { HttpProxyService } from 'src/services/http-proxy.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { AudioDetails } from 'src/models/audio-details';
import { ChordUnit } from 'src/models/chord-unit';


@Injectable({
  providedIn: 'root'
})

export class AudioService {
  private baseUrl: string = environment.url;
  private cloudUrl = 'https://res.cloudinary.com/dc2luclac/video/upload/';

  constructor(private http: HttpProxyService) { }

  public getAll(): Observable<AudioDetails[]> {

     return this.http.get<AudioDetails[]>(this.baseUrl + 'audio/list');
        }

   public upload(data: any) {
     return this.http.filePost(this.baseUrl + 'audio/upload' , data);
  }

  public storageUrl(audio: AudioDetails) {
    return this.cloudUrl + audio.id + audio.name;
  }

  public getAudioChords(id: string): Observable<ChordUnit[]> {

    return this.http.get(this.baseUrl + 'audio/songtutorial/' + id);
  }
}
