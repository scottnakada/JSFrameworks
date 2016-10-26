import { Component, Input } from '@angular/core';

import { ProductClass } from '../../product-class';

@Component({
    moduleId: module.id,
    selector: 'productTable',
    templateUrl: './productTable.component.html',
    styleUrls: ['./productTable.component.css']
})

export class ProductTableComponent {

    @Input() products: ProductClass[];

    constructor() {

    }

}
