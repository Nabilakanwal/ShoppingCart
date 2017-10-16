import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { DbserviceService } from '../../services/dbservice.service';
// import {  MatToolbarModule, 
//           MatIconModule, 
//           MatCardModule, 
//           MatInputModule, 
//           MatFormFieldModule, 
//           MatMenuModule, 
//           MatButtonModule, 
//           MatButtonToggleModule, 
//           MatTabsModule,
//           MatSelectModule
//         } from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  displayProductsArr;
  // selectedValue: string;

  categories = [
    {value: 'Men-0', viewValue: 'Men'},
    {value: 'Women-1', viewValue: 'Women'},
    {value: 'Kids-2', viewValue: 'Kids'},
    {value: 'Gift-3', viewValue: 'Gifts'}
  ];

  constructor(private dbService : DbserviceService) {
      this.dbService.getProductsList((productsArr)=>{
        this.displayProductsArr = productsArr;
      //  console.log("this.displayProductsArr================>>>>", productsArr);
      //  console.log("this.displayProductsArr================>>>>", productsArr.length);
      });
   }

  
  ngOnInit() {
  }

   onSubmit(formValue) {
    console.log("save product detail: ", formValue);
    this.dbService.saveProduct(formValue);
    // console.log(form)
  }


}
