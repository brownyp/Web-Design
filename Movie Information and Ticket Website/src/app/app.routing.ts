import { Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component'
import { LoginComponent } from './components/login/login.component';
import {RowComponent} from './components/row/row.component';
export const AppRoutes: Routes = [
  {
    path: 'products/',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: DetailsComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'order',
    component: OrderComponent
  },
  {
    path: 'main',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }, {
    path: '',
    component: LoginComponent
  }, {
    path: 'row',
    component: RowComponent
  },

];
