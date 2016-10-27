import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'searchBar',
    templateUrl: './searchBar.component.html',
    styleUrls: ['./searchBar.component.css']
})

export class SearchBarComponent {

    @Input() searchText: string;
    @Input() inStockOnly: boolean;

    constructor() {

    }

}
