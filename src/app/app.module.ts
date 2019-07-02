import { HttpProxyService } from './../services/http-proxy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioLibraryComponent } from './audio-library/audio-library.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioService} from 'src/services/audio.service';

@NgModule({
  declarations: [
    AppComponent,
    AudioLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AudioService, HttpProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
