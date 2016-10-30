'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Quickstart Prototypes</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="app">Home<span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="about">About</Link></li>
                                <li><Link to="privacy">Privacy</Link></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Navbar;