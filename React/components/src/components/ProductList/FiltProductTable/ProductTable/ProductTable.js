'use strict';

var React = require('react');
var ProductCategoryRow = require('./ProductCategoryRow/ProductCategoryRow');
var ProductRow = require('./ProductRow/ProductRow');

var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr className="info">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = ProductTable;