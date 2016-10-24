'use strict';

var React = require('react');

var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Search..."/>
                    <div className="checkbox">
                        <label><input type="checkbox" value="">Only show products in stock</input></label>
                    </div>
                </form>
            </div>
        );
    }
});


module.exports = SearchBar;