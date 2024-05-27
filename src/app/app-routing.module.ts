import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { IndexComponent } from './index/index.component';
import { LouayComponent } from './louay/louay.component';
import { VideoCaptureComponent } from './louay/video-capture/video-capture.component';
import { EntreneurComponent } from './entreneur/entreneur.component';
import { AffentreComponent } from './affentre/affentre.component';
import { AffclientComponent } from './affclient/affclient.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'louay', component: LouayComponent },
  { path: 'test', component: VideoCaptureComponent },
  { path: 'entreneur', component: EntreneurComponent },
  { path: 'affentreneur', component: AffentreComponent },
  { path: 'affclient', component: AffclientComponent },



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
