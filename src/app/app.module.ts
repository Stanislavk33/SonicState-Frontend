import { AuthenticationService } from './../services/authentication.service';
import { HttpProxyService } from './../services/http-proxy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioLibraryComponent } from './audio-library/audio-library.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioService} from 'src/services/audio.service';
import { AudioUploadComponent } from './audio-upload/audio-upload.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioLibraryComponent,
    AudioUploadComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AudioService, HttpProxyService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
