'use strict';

var React = require('react');
var FiltProductTable = require('./FiltProductTable/FiltProductTable');
var PRODUCTS = require('./Products/Products');

var ProductList = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Product List Page</h1>
                <p>This page demonstrates the use of components to build a web-page.
                    Included in the page are 5 nested components:
                    <ul>
                        <li>FiltProductTable - a filterable product table</li>
                        <ol>
                            <li>SearchBar - a search bar, and checkbox for selecting only products in stock</li>
                            <li>ProductTable - a product table containing product categories, and data rows</li>
                            <ol type="a">
                                <li>ProductCategoryRow - a product category row</li>
                                <li>ProductRow - a product data row</li>
                            </ol>
                        </ol>
                    </ul>
                </p>
                <hr />
                <FiltProductTable products={PRODUCTS}/>
            </div>
        );
    }
});

module.exports = ProductList;
