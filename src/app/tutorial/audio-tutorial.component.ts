import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChordTutorial } from 'src/models/chord-tutorial';
import { TutorialService } from 'src/services/tutorial.service';

@Component({
  selector: 'app-audio-tutorial',
  templateUrl: './audio-tutorial.component.html',
  styleUrls: ['./audio-tutorial.component.css']
})

export class AudioTutorialComponent implements OnInit {
  public chordTutorial: ChordTutorial;
  public progress = 0;
  private ms = 0;

  constructor(private tutorialService: TutorialService, private changeDetector: ChangeDetectorRef) { }

  private calculateProgress() {
    if (!this.changeDetector['destroyed']) {

      this.changeDetector.detectChanges();
      if (this.timeUntilNextChordMs() > 0) {
        this.progress = (++this.ms / this.timeUntilNextChordMs()) * 100;
      }

      setTimeout(this.calculateProgress.bind(this), 8.8);
      this.changeDetector.detectChanges();
    }
  }

  private timeUntilNextChordMs() {
    return this.chordTutorial ? Number((this.chordTutorial.timeUntilNext * 100).toFixed(0)) : 0;
  }

  ngOnInit() {
    if (!this.changeDetector['destroyed']) {
      this.changeDetector.detectChanges();
    }
    this.calculateProgress();
    this.tutorialService.ChordTutorial.subscribe(chordTutorial => {
      this.progress = 0;
      this.ms = 1;
      this.chordTutorial = chordTutorial;
      this.changeDetector.detectChanges();
      this.zoomNextChord();
    });
  }

  ngOnDestroy() {

  }
  private zoomNextChord() {
    const nextChordEl = document.getElementById('next-chord');

    setTimeout(() => {
      nextChordEl.style.transform = 'scale(1)';
      nextChordEl.style.transitionDuration = '0s';
    }, 0);

    setTimeout(() => {
      nextChordEl.style.transform = 'scale(2)';
      nextChordEl.style.transitionDuration = (this.chordTutorial.timeUntilNext + 1) + 's';
    }, this.chordTutorial.timeUntilNext * 100);
  }
}
