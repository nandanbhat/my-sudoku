import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Game } from '../game';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  ticks =0;

  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>this.ticks = t);
  }

}
