import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http'

//import { CartItemModel } from '../model/CartItemModel'
import { cartUrl, productUrl } from '../config/apiConfig';
import { CartItemModel } from '../model/CartItemModel';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  //<CartItemModel[]> 
  getCartItems(): Observable<CartItemModel[]>{
    return this.http.get<CartItemModel[]>(cartUrl).pipe(
      map((result: CartItemModel[]) => {
        let cartItems: CartItemModel[]=[];

        for(let item of result){
          let productExist = false;
          console.log('result.size ',result.length);
          for(let i in cartItems){
            console.log('',this.cartItems[i]);
            if (this.cartItems[1].productId === item.product.id) {
              cartItems[i].qty++;
              productExist = true;
              break;
            }
          }
          if (!productExist) {
          cartItems.push(new CartItemModel(item.id, item.product));
          console.log('cartItems ',cartItems)
          }
        }        
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, {product});
  }
}
