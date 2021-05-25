import { Injectable } from '@angular/core';
import { FlightInterface } from '../models/flight.model';
import { FLIGHTS } from '../../mock-flights';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  getFlights(): Observable<FlightInterface[]> {
    return of(FLIGHTS);
  }
}
