import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/services/audio.service';
import { AudioDetails } from 'src/models/audio-details';


@Component({
  selector: 'app-audio-library',
  templateUrl: './audio-library.component.html',
  styleUrls: ['./audio-library.component.css']
})
export class AudioLibraryComponent implements OnInit {

  public audios: AudioDetails[];
  public audioToPlay: AudioDetails;

  constructor(private service: AudioService) { }

  ngOnInit() {
    this.service.getAll().subscribe(audioDetails => {
      this.audios = audioDetails;
    });
  }

  public buttonPlayPress(audio: AudioDetails) {
    this.audioToPlay = audio;
}

}
