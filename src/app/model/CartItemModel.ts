import { Product } from './product';

export class CartItemModel {
    id: number;
    productId: number;
    productName: string;
    price: number; 
    qty: number;
    product: Product;

    constructor(id: number, product: Product, qty = 1){
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = qty;
    }
}
