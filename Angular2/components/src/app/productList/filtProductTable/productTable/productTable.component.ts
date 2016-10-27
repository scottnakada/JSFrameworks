import { Component, Input, OnInit, OnChanges, SimpleChange, AfterViewChecked } from '@angular/core';

import { ProductClass } from '../../productClass';

@Component({
    moduleId: module.id,
    selector: 'productTable',
    templateUrl: './productTable.component.html',
    styleUrls: ['./productTable.component.css']
})

export class ProductTableComponent implements OnChanges, OnInit {

    @Input() products: ProductClass[];
    @Input() searchText: string;
    @Input() inStockOnly: boolean;

    lastCategory: '';
    filtProductList: ProductClass[];

    constructor() {

    }

    ngAfterViewChecked() {
        this.lastCategory = '';
    }

    ngOnInit() {
        this.lastCategory = '';
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        this.lastCategory = '';
        this.filtProductList = [];
        for (let product of this.products) {
            if (product.name.indexOf(this.searchText) === -1 ||
                (!product.stocked && this.inStockOnly)) {
            } else {
                this.filtProductList.push(product);
            }
        }
    }


    isNewCategory(category, product) {
        if (category == this.lastCategory) {
            return false;
        }
        this.lastCategory = category;
        return true;
    }

}
