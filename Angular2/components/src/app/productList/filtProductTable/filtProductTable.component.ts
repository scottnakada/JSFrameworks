import { Component, Input } from '@angular/core';

import { ProductClass } from '../productClass';

@Component({
    moduleId: module.id,
    selector: 'filtProductTable',
    templateUrl: './filtProductTable.component.html',
    styleUrls: ['./filtProductTable.component.css']
})

export class FiltProductTableComponent {

    @Input() products: ProductClass[];

    searchText: string = '';
    inStockOnly: boolean = false;

    constructor() {

    }

}
