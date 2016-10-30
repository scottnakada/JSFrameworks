import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'searchBar',
    templateUrl: './searchBar.component.html',
    styleUrls: ['./searchBar.component.css']
})

export class SearchBarComponent {

    @Input() searchText: string;
    @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();
    @Input() inStockOnly: boolean;
    @Output() inStockOnlyChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {

    }

    onSearchTextChange() {
        this.searchTextChange.emit(this.searchText);
    }

    onInStockOnlyChange(element: HTMLInputElement) {
        this.inStockOnly = element.checked;
        this.inStockOnlyChange.emit(this.inStockOnly)
    }
}
