import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(
    private msgService: MessangerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msgService.sendMessage(this.productItem);
    })
  }
}
