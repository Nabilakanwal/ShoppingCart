import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms'
import {  MatToolbarModule, 
          MatIconModule, 
          MatCardModule, 
          MatInputModule, 
          MatFormFieldModule, 
          MatMenuModule, 
          MatButtonModule, 
          MatButtonToggleModule, 
          MatTabsModule,
          MatSelectModule
        } from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories = [
    {value: 'Men-0', viewValue: 'Men'},
    {value: 'Women-1', viewValue: 'Women'},
    {value: 'Kids-2', viewValue: 'Kids'},
    {value: 'Gift-2', viewValue: 'Gifts'}
  ];

  constructor() { }

  ngOnInit() {
  }

   onSubmit(form: NgForm) {
    console.log(form)
  }

}
