'use strict';

var React = require('react');
var SearchBar = require('./SearchBar/SearchBar');
var ProductTable = require('./ProductTable/ProductTable');

var FiltProductTable = React.createClass({
    render: function () {
        return (
            <div className="col-xs-4 col-xs-offset-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <SearchBar />
                    </div>
                    <div className="panel-body">
                        <ProductTable products={this.props.products}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FiltProductTable;