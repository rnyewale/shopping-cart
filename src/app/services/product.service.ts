import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl } from 'src/app/config/apiConfig';
//const apiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  // // TODO: To populate products from an API
  // products: Product[] = [
  //   new Product(1, 'Product 1', 'This is product 1 description', 100,
  //    "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg"),
  //   new Product(2, 'Product 2', 'This is product 2 description', 300,
  //   "https://cdn.fcglcdn.com/brainbees/images/cattemplate/Tactical-Units_Kids_Shop-by-age_2.jpg"),
  //   new Product(3, 'Product 3', 'This is product 3 description', 400,
  //   "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/10555/101798/Men-sneakers-2018-new-denim-lace-up-canvas-shoes-men-footwear-spring-summer-plimsolls-breathable-sneakers__47835.1536301316.jpg?c=2"),
  //   new Product(4, 'Product 4', 'This is product 4 description', 500,
  //   "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/20743/182596/AODLEE-Fashion-Men-Sneakers-for-Men-Casual-Shoes-Breathable-Lace-up-Mens-Casual-Shoes-Spring-Leather__83599.1545973945.jpg?c=2"),
  //   new Product(5, 'Product 5', 'This is product 5 description', 600,
  //   "https://shopfoy.com/images/detailed/16/Oeak-Spring-New-Two-color-Mix-Match-Brigh-Canvas-Shoes-Men-s-Shoes-Trend-Student-Shoes.jpg"),
  //   new Product(6, 'Product 6', 'This is product 6 description', 700,
  //   "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkvZ_bkIz3gC-beWTJpI4DZMc0NQGLigoPL_kPgiCYBjFBQIHDx2VblcNJ-mwgLXN0ogylPYapPBA&usqp=CAc"),
  //   new Product(7, 'Product 7', 'This is product 7 description', 250,
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4m3Ahtmd851Y2iL-uf8NU3mU6EJp9ZwOPsUmr5q1oXBPG15cQ&usqp=CAU"),
  //   new Product(8, 'Product 8', 'This is product 8 description', 460),
  //   new Product(9, 'Product 9', 'This is product 9 description', 1000),
  //   new Product(10, 'Product 10', 'This is product 10 description', 800)
  // ]

  constructor(private http: HttpClient) { 
   // console.log('** inside Service *** : ', this.getProducts())
  }

  getProducts(): Observable <Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
