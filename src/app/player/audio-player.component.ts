import WaveSurfer from 'wavesurfer.js';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AudioService } from 'src/services/audio.service.js';
import { ChordUnit } from 'src/models/chord-unit.js';
import { AudioDetails } from 'src/models/audio-details.js';
import { TutorialService } from 'src/services/tutorial.service';
import { ChordTutorial } from 'src/models/chord-tutorial';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  cloudUrl = 'https://res.cloudinary.com/dc2luclac/video/upload/v1570204035/Burning_exuoy9.mp3';

  wave: WaveSurfer = null;
  volume = 1;
  isPlaying = false;
  @Input() audio: AudioDetails;
  audioChords: ChordUnit[];
  useTutorial = false;
  chordsInTime: Map<number, ChordTutorial>;

  currentAudioProgress: number;

  constructor(private tutorialService: TutorialService, private audioSerivce: AudioService) { }

  ngOnInit() {
    this.wave = WaveSurfer.create({
      container: '#waveform',
      progressColor: '#582841',
      waveColor: '#CC2A49'
    });
  }

  getCurrentTime() {
    if (this.wave == null) {
      return 0;
    }
    return this.wave.getCurrentTime();

  }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.audio) {
      return;
    }

    console.log(changes);
    console.log(changes.audio.currentValue);
    this.wave.load(this.audioSerivce.storageUrl(this.audio));
    this.isPlaying = true;
    this.wave.on('ready', () => {
      this.wave.play();
      this.audioSerivce.getAudioChords(this.audio.id).subscribe(chords => {
        this.audioChords = chords;

        this.chordsInTime = this.tutorialService.chordsInTime(chords);
      }
      );

      this.wave.on('audioprocess', () => {
        this.tutorialService.distributeChord(this.chordsInTime, this.wave.getCurrentTime());
      });
    });
  }

  ngOnDestroy() {
    this.wave.destroy();
  }

  Load() {
    this.wave.load(this.audioSerivce.storageUrl(this.audio));
    this.isPlaying = true;
    this.wave.on('ready', () => this.wave.play());
    this.audioSerivce.getAudioChords(this.audio.id).subscribe(c => {
      this.audioChords = c;
    });
  }

  onPlayPressed() {
    this.wave.playPause();
  }

  onStartTutorial() {
    if (this.useTutorial === false) { this.useTutorial = true; } else { this.useTutorial = false; }
    // this.startTimer(this.chordTutorial.timeUntilNext);
  }

  volumeChange() {
    this.wave.setVolume(this.volume);
  }
}
