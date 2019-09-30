import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { AudioLibraryComponent } from './audio-library/audio-library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'audio/list', component: AudioLibraryComponent},
  {path: 'audio/upload', component: AudioUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
