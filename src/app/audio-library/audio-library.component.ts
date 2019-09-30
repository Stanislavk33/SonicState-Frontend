import { ChordUnit } from 'src/models/chord-unit';
import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/services/audio.service';
import { AudioDetails } from 'src/models/audio-details';
import { resolve } from 'url';


@Component({
  selector: 'app-audio-library',
  templateUrl: './audio-library.component.html',
  styleUrls: ['./audio-library.component.css']
})
export class AudioLibraryComponent implements OnInit {

  public audios: AudioDetails[];
  public chords: ChordUnit[];
  public chordTutorial: string[];

  constructor(private service: AudioService) { }

  ngOnInit() {
    this.service.getAll().subscribe(audioDetails => {
      this.audios = audioDetails;
      debugger;
    });
  }

  public GenerateChords(storageName: string) {
    this.service.getAudioChords(storageName).subscribe(audioChords => {
      this.chords = audioChords;
    });
  }


  public async Tutorial(chords: ChordUnit[]) {
    for (let i = 0; i < chords.length; i++) {
      this.chordTutorial = [];
      if ((i + 1) !== chords.length) {

        let ms = chords[(i + 1)].time - chords[i].time;

        if (i > 1) { this.chordTutorial.push(chords[i - 1].chord); }

        this.chordTutorial.push(chords[i].chord);
        console.log('Current chord:' + chords[i].chord);

        if (i !== chords.length) { this.chordTutorial.push(chords[i + 1].chord); }

        await this.sleep(ms);
      } else {
        console.log('Current chord:' + chords[i].chord);
        this.chordTutorial[1] = chords[i].chord;
      }
    }
  }

  private sleep(ms): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, (ms * 1000));
    });
  }
}
