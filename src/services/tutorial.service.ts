
import { Injectable } from '@angular/core';
import { ChordUnit } from 'src/models/chord-unit';
import { ChordTutorial } from 'src/models/chord-tutorial';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  public ChordTutorial: Subject<ChordTutorial> = new Subject<ChordTutorial>();

  constructor() { }

  public chordsInTime(chords: ChordUnit[]): Map<number, ChordTutorial> {
    const map = new Map();

    for (let i = 0; i < chords.length - 1; i++) {
      const cc = chords[i];
      const nc = chords[i + 1];

      map.set(cc.time, {
        currentChord: cc.chord,
        nextChord: nc.chord,
        timeUntilNext: nc.time - cc.time
      } as ChordTutorial);
    }

    return map;
  }

  public distributeChord(chordsInTime: Map<number, ChordTutorial>, time: number) {
    let chord;
    if(chordsInTime){ chord = chordsInTime.get(Number(time.toFixed(2))); }
    if (chord) {
      this.ChordTutorial.next(chord);
    }
  }
}
