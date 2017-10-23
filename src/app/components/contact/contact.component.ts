import { Component, OnInit } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatButtonModule, MatButtonToggleModule, MatTabsModule} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { DbserviceService } from '../../services/dbservice.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private dbService : DbserviceService) { 

  }

  onSubmit(feedBackValue){
    console.log("save product detail: ", feedBackValue);
    this.dbService.saveFeedBack(feedBackValue);
  }

  ngOnInit() {
  }

}
