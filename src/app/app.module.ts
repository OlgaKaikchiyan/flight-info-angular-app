import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightInfoComponent } from './components/flightInfo/flightInfo.component';
import { TimeInfoComponent } from './components/timeInfo/timeInfo.component';
import { DetailsComponent } from './components/details/details.component';
import { FlightComponent } from './components/flights/flights.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [					
    AppComponent,
      FlightInfoComponent,
      TimeInfoComponent,
      DetailsComponent,
      FlightComponent
   ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
