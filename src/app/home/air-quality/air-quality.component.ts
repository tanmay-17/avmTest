import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent implements OnInit {
  @Input() info: any;
  constructor() { }

  ngOnInit(): void {
  }

}
