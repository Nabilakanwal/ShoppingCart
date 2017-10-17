import { Component, OnInit } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatButtonModule, MatButtonToggleModule, MatTabsModule} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { DbserviceService } from '../../services/dbservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    displayViewCartBtn : Boolean = false;
    displayProductsArr;
    viewCartBtn;
    shopProducts : any = [];
    viewbtn = {

    }



    tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private dbService : DbserviceService) {
    this.dbService.getProductsList((productsArr)=>{
        this.displayProductsArr = productsArr;
      });
   }


    productAddinCart(productData){
     console.log("Adding product in cart:");  
      this.displayViewCartBtn = true;
      this.viewbtn[productData.key] = true;  
      this.shopProducts.push(productData);
      console.log(productData);
   }

   viewCart(){
      let cartData = this.shopProducts;
      // this.router.navigate(['/cart', { prodObj : cartData }]);
   }

  ngOnInit() {
  }

}
