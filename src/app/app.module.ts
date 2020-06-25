import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { PreScanComponent } from './pre-scan/pre-scan.component';
@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardComponent,
    PreScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
