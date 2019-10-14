import { AudioService } from '../../services/audio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.css']
})
export class AudioUploadComponent implements OnInit {

  constructor(private service: AudioService, private formBuilder: FormBuilder, private router: Router) {
  }

  uploadForm: FormGroup;
   fileName = "Choose File";


  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      audio: ['']
    });
  }

  OnSubmit() {
    let formData = new FormData();
    formData.append('audio', this.uploadForm.get('audio').value);
    this.service.upload(formData).subscribe(() => this.router.navigate(['audio/list']) );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileName = event.target.files[0].name;
      this.uploadForm.get('audio').setValue(file);
    }
  }


}




