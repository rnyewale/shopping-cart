import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItemModel } from 'src/app/model/CartItemModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItemModel[] = [];
  cartTotal = 0;

  constructor(private msgService: MessangerService, private cartService: CartService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msgService.getMessage().subscribe((product: Product) => {
      //this.addproductToCart(product);
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((item: CartItemModel[]) => {
      this.cartItems = item;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += item.price * item.qty;
    })
  }

  // addproductToCart(product: Product) {
  //   let productExist = false;
  //   if (this.cartItems.length > 0) {
  //     for (let i in this.cartItems) {
  //       if (this.cartItems[i].productId === product.id) {
  //         this.cartItems[i].qty++;
  //         productExist = true;
  //       }
  //     }
  //   }

  //   if (!productExist) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price
  //     })
  //   }
  //   this.calcCartTotal();
  // }
}

