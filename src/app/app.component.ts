import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  model: ProductRepository = new ProductRepository();
  disabled = true;

  getClasses(id:number):string{
    let product = this.model.getProductsById(id);
    return (product.price <= 1000 ? "bg-secondary": "bg-info")+ " m-2 p-2"
  }


  getClassMap(id:number):Object{
    let product = this.model.getProductsById(id);
    return {
      "bg-info": product.price <= 1000,
      "bg-secondary": product.price >1000,
      "text-center text-white": product.name == "Iphone 8 Plus"
    }
  }

}
