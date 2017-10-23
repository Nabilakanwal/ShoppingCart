import { BrowserModule } from '@angular/platform-browser';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonToggleModule, MatCheckboxModule, MatTableModule, MatSliderModule, MatListModule, MatIconModule, MatSelectModule, MatInputModule, MatCardModule, MatMenuModule, MatButtonModule, MatGridListModule, MatTabsModule, MatFormFieldModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
//service
import { DbserviceService } from './services/dbservice.service';
import { LeftnavshopComponent } from './components/leftnavshop/leftnavshop.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



export const firebaseConfig = {
    apiKey: "AIzaSyBW8u2CYurxYLXyUQdj282rp7dbjXFGk5s",
    authDomain: "exampleappfirebase.firebaseapp.com",
    databaseURL: "https://exampleappfirebase.firebaseio.com",
    projectId: "exampleappfirebase",
    storageBucket: "exampleappfirebase.appspot.com",
    messagingSenderId: "338916789692"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    AddProductComponent,
    LeftnavshopComponent,
    ShopComponent,
    ProductDetailComponent,
    ViewCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule, 
    MatGridListModule, 
    MatButtonToggleModule, 
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatSliderModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
         path: '',
         component: HomeComponent
      },
      {
         path: 'home',
         component: HomeComponent
      },
      {
         path: 'shop',
         component: ShopComponent
      },
      {
         path: 'contact',
         component: ContactComponent
      },
      {
         path: 'addProduct',
         component: AddProductComponent
      },
      {
         path: 'cart',
         component: ViewCartComponent
      },
      {
         path: 'checkout',
         component: CheckoutComponent
      }
    ])
  ],
  providers: [ DbserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
