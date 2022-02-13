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

  product: Product = this.model.getProductsById(1);
}
