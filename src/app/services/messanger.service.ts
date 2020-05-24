import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject(); 

  constructor() { }

  sendMessage(product ){
   // console.log('product sends to cart: ', product)
    this.subject.next(product);
  }

  getMessage(){
    return this.subject.asObservable();
  }
}
