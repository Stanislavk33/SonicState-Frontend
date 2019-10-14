import { AudioTutorialComponent } from './tutorial/audio-tutorial.component';
import { AuthenticationService } from './../services/authentication.service';
import { HttpProxyService } from './../services/http-proxy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioLibraryComponent } from './library/audio-library.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioService } from 'src/services/audio.service';
import { AudioUploadComponent } from './upload/audio-upload.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login/login.component';
import { AudioPlayerComponent } from './player/audio-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TutorialService } from 'src/services/tutorial.service';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AudioLibraryComponent,
    AudioUploadComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AudioPlayerComponent,
    AudioTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [AudioService, HttpProxyService, AuthenticationService, TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
