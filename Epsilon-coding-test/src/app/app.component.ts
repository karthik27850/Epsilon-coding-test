import { Component, OnInit } from '@angular/core';
import { ProductItemService } from './product-Item-service';
import { ProductItem } from './productItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'epsilon';
  name: any;
  email: any;
  password: any;
  confirmPassword: any;
  phoneNumber: any;

  showTable: boolean = false;
  showCard: boolean = false;
  showForm: boolean = false;

  products1: ProductItem[] = [];

  products2: ProductItem[] = [];

  products3: ProductItem[] = [];

  constructor(private productService: ProductItemService) { }


  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products1 = data);
    this.productService.getProductsSmall().then(data => this.products2 = data);
    this.productService.getProductsSmall().then(data => this.products3 = data);
  }

  showTableContent() {
    this.showTable = true;
    this.showForm = false;
    this.showCard = false;
  }

  showCardContent() {
    this.showTable = false;
    this.showForm = false;
    this.showCard = true;
  }

  showFormContent() {
    this.showTable = false;
    this.showForm = true;
    this.showCard = false;
  }

}
