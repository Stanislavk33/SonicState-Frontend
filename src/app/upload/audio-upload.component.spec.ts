import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioUploadComponent } from './audio-upload.component';

describe('AuidoUploadComponent', () => {
  let component: AudioUploadComponent;
  let fixture: ComponentFixture<AudioUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
