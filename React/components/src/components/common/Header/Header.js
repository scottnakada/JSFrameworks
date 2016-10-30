'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>React Components Demo</h1>
                        <p>Use React components to build a product list.</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;