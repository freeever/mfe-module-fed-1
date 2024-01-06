import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ProductService } from '../../services/functional/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  destroyRef = inject(DestroyRef);
  products: Array<any> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }
}
