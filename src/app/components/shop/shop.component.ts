import { Component, OnInit } from '@angular/core';
import { LeftnavshopComponent } from '../leftnavshop/leftnavshop.component';
import { DbserviceService } from '../../services/dbservice.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayViewCartBtn : Boolean = false;
   displayProductsArr;
   viewCartBtn;
   shopProducts : any = [];

  constructor(private dbService : DbserviceService) {
      this.dbService.getProductsList((productsArr)=>{
        this.displayProductsArr = productsArr;
      });
   }

   productAddinCart(productData){
     console.log("Adding product in cart:");  
      this.displayViewCartBtn = true;
    //  if(productData.key == ""){
    //     this.displayViewCartBtn = true;
    //  }
    //  else{
    //     this.displayViewCartBtn = false;
    //  }   
     
     this.shopProducts.push(productData);
     console.log(productData);

   }

   viewCart(){
      let cartData = this.shopProducts;
      // this.router.navigate(['/cart', { prodObj : cartData }]);
   }


    // this.router.navigate(['/cart', { prodObj : productData }]);

  ngOnInit() {
  }

}
