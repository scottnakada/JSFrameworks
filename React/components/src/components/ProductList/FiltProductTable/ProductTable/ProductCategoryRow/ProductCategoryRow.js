'use strict';

var React = require('react');

var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});


module.exports = ProductCategoryRow;