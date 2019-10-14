import { LoginComponent } from './login/login/login.component';
import { AudioUploadComponent } from './upload/audio-upload.component';
import { AudioLibraryComponent } from './library/audio-library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'audio/list', component: AudioLibraryComponent},
  {path: 'audio/upload', component: AudioUploadComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
