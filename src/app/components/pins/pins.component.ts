import { Component, OnInit } from '@angular/core';
import { Pin } from '../../pin';
import { PINS } from '../../mock-pins';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {
  pin = PINS;


  constructor() { }

  ngOnInit(): void {
  }

}
