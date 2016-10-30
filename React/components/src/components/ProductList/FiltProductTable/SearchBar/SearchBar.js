'use strict';

var React = require('react');

var SearchBar = React.createClass({
    handleChange: function() {
        var searchTextInput = document.getElementById("filterTextInput").value;
        var inStockOnlyInput = document.getElementById("inStockOnlyInput").checked;
        this.props.onUserInput(
            searchTextInput,
            inStockOnlyInput
        )
    },
    render: function () {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        id="filterTextInput"
                        value={this.props.filterText}
                        onChange={this.handleChange}
                    />
                    <div className="checkbox">
                        <label>
                            <input
                                    type="checkbox"
                                    checked={this.props.inStockOnly}
                                    id="inStockOnlyInput"
                                    onChange={this.handleChange}
                            >
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