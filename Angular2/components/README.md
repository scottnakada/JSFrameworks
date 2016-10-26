# Components

This is a simple angular 2 project which demonstrates using components in Angular 2.
The project uses bootstrap twitter for styling, and WebPack for build/run.

This version is based on:
```
angular: 2.1.0
bootstrap: 4.0.0-alpha.2
jquery: 2.2.3
webpack: 2.1.0-beta.21
```

### Prerequisites

Please use node 6.0.0 and npm 3.10.8 or later to install
the dependencies

To build this project, download it from github:
```
    git clone https://github.com/scottnakada/JSFrameworks.git
    cd JSFrameworks/Angular2/components
    npm install
    npm start
```    
Open a browser window at localhost:3000
    
File/Component/Service Descriptions
===================================
```
index.html - the starting point for the project (includes <app></app>
    tag for the application

app/app.module.ts - declares the major dependencies for the project
app/app.component.ts - top level component for the project
app/app.component.html - top level application html, refers to
    app_navbar, app_header, router_outlet, and app_footer components
app/app-routing.ts - application routes
```

Components
==========
```
    app/common/app_navbar - navbar for the app
    app/common/app_header - header for the app
    app/common/app_footer - footer for the app
    
    app/home - Initial route/component, /home route, display Home Page message
    app/about - Route/component, /about route, display About Page message
    app/privacy - Route/component, /privacy route, display Privacy Page message
    app/product_list - Route/component, /productList, display Product List components
```

Code Tree
=========
```

```
