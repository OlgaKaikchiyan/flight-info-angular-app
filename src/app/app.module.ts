import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightInfoComponent } from './flightInfo/flightInfo.component';
import { TimeInfoComponent } from './timeInfo/timeInfo.component';
import { DetailsComponent } from './details/details.component';
import { FlightComponent } from './flight/flight.component';

@NgModule({
  declarations: [					
    AppComponent,
      FlightInfoComponent,
      TimeInfoComponent,
      DetailsComponent,
      FlightComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
