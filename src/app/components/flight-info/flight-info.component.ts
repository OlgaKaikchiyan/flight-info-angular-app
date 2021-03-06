import { Component, Input } from '@angular/core';
import { FlightInterface} from '../../shared/models/flight.model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})

export class FlightInfoComponent {

  @Input() data!: FlightInterface

  public getOfficeLocations(locations: string[]): string {
    return locations.join(', ');
  }

  public getMilestoneType(milestoneTypes: string[]): string {
    return milestoneTypes.join(', ')
  }

}
