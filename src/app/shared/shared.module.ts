import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerComponent } from '../timer/timer.component';
import { BtnComponent } from '../btn/btn.component';
import { ToggleComponent } from '../toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimerComponent, BtnComponent, ToggleComponent],
  exports: [TimerComponent, BtnComponent, ToggleComponent]
})
export class SharedModule { }
