import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { AudioLibraryComponent } from './audio-library/audio-library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'audio/list', component: AudioLibraryComponent},
  {path: 'audio/upload', component: AudioUploadComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
