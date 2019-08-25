import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartComponent} from './cart/cart.component';
import {ProductsSectionResolve} from './product-section/products.-section.resolve';
import {AuthGuard} from './authentication/auth.guard';
import {AuthSellerGuard} from './authentication/auth-seller.guard';

const routes: Routes = [
  {path: '', component: ProductListComponent, resolve: {productList: ProductsSectionResolve}},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, AuthSellerGuard],},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'user/cart', component: CartComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
