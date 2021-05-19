import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeInfo',
  templateUrl: './timeInfo.component.html',
  styleUrls: ['./timeInfo.component.scss'],
})
export class TimeInfoComponent implements OnInit {
  
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
