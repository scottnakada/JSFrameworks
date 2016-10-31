# Ember Routing Demo

This repository demonstrates Ember routing by setting up a simple
app which can switch between a few different pages.

# Instructions for building this app

ember new routing
cd routing
npm start
connect to localhost:4200

npm install ember-cli-bootstrap-sassy ember-cli-sass --save-dev
bower install query bootstrap-sass --save

ember generate route about
ember generate route privacy
ember generate route home
ember generate route index
ember generate template application
ember generate component app-header
ember generate component app-navbar
ember generate component app-footer

app/templates/about.hbs:
<h1>About Page</h1>

app/templates/privacy.hbs:
<h1>Privacy Page</h1>

app/templates/home.hbs:
<h1>Home Page</h1>

app/templates/application.hbs:
{{app-navbar}}
{{app-header}}
{{outlet}}
{{app-footer}}
app/routes/index.js:
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.replaceWith('home');
  }
});
app/templates/components/app-header.hbs
<article>
    <header class="hero-unit" id="banner">
        <div class="container">
            <h1>Ember JS Navigation Demo</h1>
            <p>Use Ember's navigation to select different pages.</p>
        </div>
    </header>
</article>
app/templates/components/app-navbar.hbs
<article>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
              {{#link-to 'index' class="navbar-brand"}}Quickstart Prototypes{{/link-to}}
            </div>

            <div class="collapse navbar-collapse" id="main-navbar">
                <ul class="nav navbar-nav">
                  {{#link-to 'index' tagName="li"}}<a href="">Home</a>{{/link-to}}
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  {{#link-to 'about' tagName="li"}}<a href="">About</a>{{/link-to}}
                  {{#link-to 'privacy' tagName="li"}}<a href="">Privacy</a>{{/link-to}}
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</article>
app/templates/components/app-footer.hbs
<article>
    <div class="container footer">
        <p>
            <a href="http://www.quickstartprototypes.com">Quickstart Prototypes</a> |
            <a href="mailTo:scottnakada@gmail.com">scottnakada@gmail.com</a> |
          {{#link-to 'privacy'}}<a href="">Privacy</a>{{/link-to}}
        </p>
    </div>
</article>
delete app/styles/app.css
add app/styles/app.scss:

 @import "bootstrap";

/**
 * Bootstrap Fonts
 */

@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot');
  src: url('../bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
  url('../bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff') format('woff'),
  url('../bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf') format('truetype'),
  url('../bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}

/**
 *Font Awesome Fonts
 */

@font-face {
  font-family: 'FontAwesome';
  src: url('../bower_components/font-awesome/fonts/fontawesome-webfont.eot?v=4.1.0');
  src: url('../bower_components/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.1.0') format('embedded-opentype'),
  url('../bower_components/font-awesome/fonts/fontawesome-webfont.woff?v=4.1.0') format('woff'),
  url('../bower_components/font-awesome/fonts/fontawesome-webfont.ttf?v=4.1.0') format('truetype'),
  url('../bower_components/font-awesome/fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

/**
 * App-wide Styles
 */

.browserupgrade {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

body {
  background-color: rgb(255, 255, 255);
}

#banner {
  border-bottom: none;
  margin-top: -20px;
}

#banner h1 {
  font-size: 60px;
  line-height: 1;
  letter-spacing: -1px;
}

.hero-unit {
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  position: relative;
  padding: 30px 15px;
  color: #F5F5F5;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom right, blue, deepskyblue);
}

.navbar-text {
  margin-left: 15px;
}

.footer {
  text-align: center;
  padding: 30px 0;
  margin-top: 70px;
  border-top: 1px solid #E5E5E5;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding-right: 0;
}

