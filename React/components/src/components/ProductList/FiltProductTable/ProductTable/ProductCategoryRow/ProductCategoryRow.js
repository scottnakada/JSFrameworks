'use strict';

var React = require('react');

var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr className="success"><th colSpan="2" style={{'textAlign': 'center'}}>{this.props.category}</th></tr>);
    }
});


module.exports = ProductCategoryRow;