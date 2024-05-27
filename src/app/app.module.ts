import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { IndexComponent } from './index/index.component';
import { LouayComponent } from './louay/louay.component';
import { VideoCaptureComponent } from './louay/video-capture/video-capture.component';
import { EntreneurComponent } from './entreneur/entreneur.component';
import { AffclientComponent } from './affclient/affclient.component';
import { AffentreComponent } from './affentre/affentre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    IndexComponent,
    LouayComponent,
    VideoCaptureComponent,
    EntreneurComponent,
    AffclientComponent,
    AffentreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }