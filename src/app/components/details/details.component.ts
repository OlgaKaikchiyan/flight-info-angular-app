import { Component, Input } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FlightInterface} from '../../shared/models/flight.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent {
  public isVisible: boolean = false;
  public faAngleDown = faAngleDown;
  public faAngleUp = faAngleUp;

  @Input() data!: FlightInterface

  toggleDetails() {
    this.isVisible = !this.isVisible;    
  }

}
