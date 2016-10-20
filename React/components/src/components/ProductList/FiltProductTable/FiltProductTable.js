'use strict';

var React = require('react');
var SearchBar = require('./SearchBar/SearchBar');
var ProductTable = require('./ProductTable/ProductTable');

var FiltProductTable = React.createClass({
    render: function () {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <SearchBar />
                    </div>
                    <div className="card-body">
                        <ProductTable products={this.props.products}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FiltProductTable;