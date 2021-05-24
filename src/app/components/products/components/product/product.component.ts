import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../utils/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {
    console.log("Añadir");
    this.productClicked.emit(this.product.id);
  }

}
