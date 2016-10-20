'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                <div className="container">
                    <p>
                        <a href="http://www.quickstartprototypes.com">Quickstart Prototypes</a> |
                        <a href="mailTo:scottnakada@gmail.com">scottnakada@gmail.com</a> |
                        <Link to="privacy">Privacy</Link>
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = Footer;