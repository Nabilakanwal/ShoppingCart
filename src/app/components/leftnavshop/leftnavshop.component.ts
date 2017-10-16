import { Component, OnInit } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatButtonModule, MatButtonToggleModule, MatTabsModule} from '@angular/material';

@Component({
  selector: 'app-leftnavshop',
  templateUrl: './leftnavshop.component.html',
  styleUrls: ['./leftnavshop.component.css']
})
export class LeftnavshopComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10000;
  min = 100;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;


constructor() { }

  ngOnInit() {
  }


  
}
