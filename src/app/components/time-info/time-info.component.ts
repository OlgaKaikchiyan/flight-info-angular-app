import { Component, Input } from '@angular/core';
import { FlightInterface} from '../../shared/models/flight.model';

@Component({
  selector: 'app-time-info',
  templateUrl: './time-info.component.html',
  styleUrls: ['./time-info.component.scss'],
})
export class TimeInfoComponent {
  public isTooltipVisible: boolean = false;
  public daysRemaining: string = '';
  
  @Input() data!: FlightInterface

  toggleTooltip() {
    this.isTooltipVisible = !this.isTooltipVisible;
  }

  getDaysOfWeek(days: string[]): string {
    if(days.length <= 3) {
      return days.join(", ");
    } else {
      this.daysRemaining = days.slice(3).join(", ");
      return days.slice(0, 3).join(", ") + '...'
    }
    
  }
}
