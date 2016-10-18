# routing

This is a simple angular 2 project which demonstrates routing in Angular 2.
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
    cd JSFrameworks/Angular2/routing
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
```

Code Tree
=========
```
├── app
│   ├── about
│   │   ├── about.component.css
│   │   ├── about.component.html
│   │   ├── about.component.ts
│   │   └── index.ts
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── common
│   │   ├── app_footer
│   │   │   ├── app_footer.component.css
│   │   │   ├── app_footer.component.html
│   │   │   ├── app_footer.component.ts
│   │   │   └── index.ts
│   │   ├── app_header
│   │   │   ├── app_header.component.css
│   │   │   ├── app_header.component.html
│   │   │   ├── app_header.component.ts
│   │   │   └── index.ts
│   │   └── app_navbar
│   │       ├── app_navbar.component.css
│   │       ├── app_navbar.component.html
│   │       ├── app_navbar.component.ts
│   │       └── index.ts
│   ├── environment.ts
│   ├── home
│   │   ├── home.component.css
│   │   ├── home.component.html
│   │   ├── home.component.ts
│   │   └── index.ts
│   ├── index.ts
│   └── privacy
│       ├── index.ts
│       ├── privacy.component.css
│       ├── privacy.component.html
│       └── privacy.component.ts
├── assets
│   └── img
│       └── app
│           └── angular.png
├── custom-typings.d.ts
├── index.html
├── main.browser.ts
├── polyfills.browser.ts
└── vendor.browser.ts
```
