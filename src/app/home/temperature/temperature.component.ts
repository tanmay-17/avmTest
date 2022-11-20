import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  @Input() info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
