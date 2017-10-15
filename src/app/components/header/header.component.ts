import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatButtonModule, MatButtonToggleModule} from '@angular/material';

// import {ScreenService} from '../../services/screen.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
