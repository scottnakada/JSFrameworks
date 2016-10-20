'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Navbar = require('../Navbar/Navbar');

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar />
                <div className="jumbotron">
                    <h1>React-Router Navigation Demo</h1>
                    <p>Use React-Router navigation to select different pages.</p>
                </div>
            </div>
        );
    }
});

module.exports = Header;