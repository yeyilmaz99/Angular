import { Product } from "./product.model";

export class SimpleDataSource{
    private products: Product[];

    constructor(){
        this.products = new Array<Product>(
            new Product(1,'Iphone 8 Plus','good product','1.png',1000),
            new Product(2,'Iphone 5 Plus','good product','2.png',9000),
            new Product(3,'Iphone 4 Plus','good product','3.png',15648),
            new Product(4,'Iphone 3 Plus','good product','4.png',87321),
            new Product(5,'Iphone 2 Plus','good product','5.png',574),
            new Product(6,'Iphone 1 Plus','good product','6.png',6546),
        );
    }
    getProducts():Product[]{
        return  this.products;
    }
}