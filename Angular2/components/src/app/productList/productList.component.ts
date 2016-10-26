import { Component } from '@angular/core';
import { FiltProductTableComponent } from './filtProductTable';
import { ProductClass } from './product-class';
import { PRODUCTS } from './products';

@Component({
    moduleId: module.id,
    selector: 'productList',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.css']
})

export class ProductListComponent {

    products: ProductClass[] = PRODUCTS;

    constructor( ) {
        console.log("In productListComponent");
        console.log(this.products);
    }

}
