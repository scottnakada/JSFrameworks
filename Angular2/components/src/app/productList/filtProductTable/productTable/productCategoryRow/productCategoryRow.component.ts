import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'productCategoryRow',
    templateUrl: './productCategoryRow.component.html',
    styleUrls: ['./productCategoryRow.component.css']
})

export class ProductCategoryRowComponent {

    @Input() category: string;

    constructor() {

    }

}
