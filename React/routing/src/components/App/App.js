/*eslint-disable strict */ // Disabling check because we can't run strict mode.  Need global variables.

var React = require('react');
var Header = require('../common/Header/Header');
var Footer = require('../common/Footer/Footer');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function () {

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = App;