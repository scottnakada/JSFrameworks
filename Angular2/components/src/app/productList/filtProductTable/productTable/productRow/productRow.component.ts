import { Component, Input } from '@angular/core';

import { ProductClass } from '../../../productClass';

@Component({
    moduleId: module.id,
    selector: 'productRow',
    templateUrl: './productRow.component.html',
    styleUrls: ['./productRow.component.css']
})

export class ProductRowComponent {

    @Input() product: ProductClass;

    constructor() {

    }

}
