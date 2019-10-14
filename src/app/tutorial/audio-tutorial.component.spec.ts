import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTutorialComponent } from './audio-tutorial.component';

describe('AudioTutorialComponent', () => {
  let component: AudioTutorialComponent;
  let fixture: ComponentFixture<AudioTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
