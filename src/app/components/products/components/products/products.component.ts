import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ProductsService } from "src/app/core/services/products/products.service";
import { Product } from "src/app/utils/models/product.model";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})

export class ProductsComponent {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log(id);
  }
}