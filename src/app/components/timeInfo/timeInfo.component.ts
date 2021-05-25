import { Component, Input } from '@angular/core';
import { FlightInterface} from '../../shared/models/flight.model';

@Component({
  selector: 'app-timeInfo',
  templateUrl: './timeInfo.component.html',
  styleUrls: ['./timeInfo.component.scss'],
})
export class TimeInfoComponent {
  public isTooltipVisible: boolean = false;
  
  @Input() data!: FlightInterface

  toggleTooltip() {
    this.isTooltipVisible = !this.isTooltipVisible;
  }
}
