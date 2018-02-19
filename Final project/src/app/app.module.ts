import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routing';

import { MainService } from './services/main.service';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { SearchPipe } from './pipes/search.pipe';
import { GenrePipe } from './pipes/genre.pipe';
import { HeaderNoSearchComponent } from './components/header-no-search/header-no-search.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { productsList } from './reducers/app.reducer';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {LoginComponent} from './components/login/login.component';

import { ProductsDataService } from "./services/product.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { LocalStorageServie, StorageService } from "./services/storage.service";
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { RowComponent } from './components/row/row.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SearchPipe,
    GenrePipe,
    HeaderNoSearchComponent,
    HeroAreaComponent,
    SearchBarComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      productsList
    }),
    RouterModule.forRoot(
      AppRoutes
    )
  ],
  providers: [
    ProductsDataService,
    MainService, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    } ,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
