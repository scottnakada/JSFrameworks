"use strict";

/* Use the react library */
var React = require('react');

/* Use the react-router library for routing */
var Router = require('react-router');
/* Define the default route, if none is specified */
var DefaultRoute = Router.DefaultRoute;
/* Create a reference to the Route component, used to define a route */
var Route = Router.Route;
/* Access the NotFoundRoute component of Router */
var NotFoundRoute = Router.NotFoundRoute;
/* Access the Redirect component of Router */
var Redirect = Router.Redirect;

/* Define the routes for this system */
var routes = (
    /* Load our app if only the / is specified */
    <Route name="app" path="/" handler={require('./components/App/App')}>
        /* Our default route will load the homePage */
        <DefaultRoute handler={require('./components/Home/Home')}/>
        /* /privacy will load the privacy page */
        <Route name="privacy" handler={require('./components/Privacy/Privacy')}/>
        /* /about will load the aboutPage */
        <Route name="about" handler={require('./components/About/About')}/>
        /* Handle not found routes */
        <NotFoundRoute handler={require('./components/common/NotFound/NotFound')}/>
    </Route>
);

/* Export routes for use by other components */
module.exports = routes;