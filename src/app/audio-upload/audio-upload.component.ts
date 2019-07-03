import { AudioService } from './../../services/audio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.css']
})
export class AudioUploadComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(private service: AudioService, private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      audio: ['']
    });
  }

  OnSubmit() {
      let formData = new FormData();
      formData.append('audio', this.uploadForm.get('audio').value);
      debugger;
      this.service.upload(formData).subscribe(isFinished => {
         debugger;
        });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('audio').setValue(file);
    }
  }
}
