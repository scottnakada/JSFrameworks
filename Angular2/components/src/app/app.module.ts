import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App is our top level component
import { AppComponent } from './app.component';
import { App_NavbarComponent } from './common/app_navbar';
import { App_HeaderComponent } from './common/app_header';
import { App_FooterComponent } from './common/app_footer';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { PrivacyComponent } from './privacy';
import { ProductListComponent } from './productList';
import { FiltProductTableComponent } from './productList/filtProductTable';
import { SearchBarComponent } from './productList/filtProductTable/searchBar';
import { ProductTableComponent } from './productList/filtProductTable/productTable';
import { ProductCategoryRowComponent } from './productList/filtProductTable/productTable/productCategoryRow';
import { ProductRowComponent } from './productList/filtProductTable/productTable/productRow';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        App_NavbarComponent,
        App_HeaderComponent,
        App_FooterComponent,
        HomeComponent,
        AboutComponent,
        PrivacyComponent,
        ProductListComponent,
        FiltProductTableComponent,
        SearchBarComponent,
        ProductTableComponent,
        ProductCategoryRowComponent,
        ProductRowComponent
    ],
    providers: [

    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
