import { Injectable } from '@angular/core';
import { FlightInterface} from '../app/flight-interface';
import { FLIGHTS } from './mock-flights'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

constructor() {}

 getFlights(): Observable<FlightInterface[]> {
    const flights = of(FLIGHTS);
    return flights;
}

}
