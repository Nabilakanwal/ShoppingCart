import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatButtonModule, MatButtonToggleModule} from '@angular/material';
import { DbserviceService } from '../../services/dbservice.service';
import { Subject } from 'rxjs/Subject';


// import {ScreenService} from '../../services/screen.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products;
  startAt = new Subject()
  endAt = new Subject()

  constructor(private dbService : DbserviceService ) {

   }

   ngOnInit() {
    // this.dbService.searchData(this.startAt, this.endAt)
    //               .subscribe(products => this.products = products)
  }

  search($event) {
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q+"\uf8ff")
  }



}
