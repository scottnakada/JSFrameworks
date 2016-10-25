'use strict';

var React = require('react');

var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={this.props.filterText}
                    />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" checked={this.props.inStockOnly}>
                                Only show products in stock
                            </input>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
});


module.exports = SearchBar;