import { Component, OnInit } from '@angular/core';
import { LeftnavshopComponent } from '../leftnavshop/leftnavshop.component';
import { DbserviceService } from '../../services/dbservice.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

   displayProductsArr;

  constructor(private dbService : DbserviceService) {
      this.dbService.getProductsList((productsArr)=>{
        this.displayProductsArr = productsArr;
      });
   }

  ngOnInit() {
  }

}
