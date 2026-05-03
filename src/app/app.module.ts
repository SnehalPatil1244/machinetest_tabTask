import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgforswitchComponent } from './components/ngforswitch/ngforswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgforComponent,
    NgswitchComponent,
    NgforswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
