

export class Product {
    id: number;
    name: string;
    description: string;
    price: number; 
    imageUrl: string;

    constructor(id: number, name: string, desc:string = '', price:number = 0, 
        url:string = "https://cf.ltkcdn.net/womens-fashion/images/orig/205134-1575x1218-onlineclothesshopping.jpg"){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.price = price;
        this.imageUrl = url;
    }
}
