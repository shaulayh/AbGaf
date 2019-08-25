import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {AgmCoreModule} from '@agm/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GoodComponent} from './good/good.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MapResources} from './map-resources';
import {StudentComponent} from './student/student.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication/authentication.service';
import {LogoutComponent} from './logout/logout.component';
import {LoginResource} from './login/login.resource';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardResource} from './dashboard/dashboard.resource';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {ProductSectionComponent} from './product-section/product-section.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductsResources} from './product-section/products.resources';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotificationsService} from './module/notifications.service';
import {FooterComponent} from './footer/footer.component';
import {CartComponent} from './cart/cart.component';
import {ProductService} from './product/product.service';
import {SharedService} from './shared/shared.service';
import {MyOwnCustomMaterialModule} from './shared/MyOwnCustomMaterial.module';
import {ProductsSectionResolve} from './product-section/products.-section.resolve';
import {AuthGuard} from './authentication/auth.guard';
import {AuthSellerGuard} from './authentication/auth-seller.guard';


@NgModule({
  declarations: [
    AppComponent,
    GoodComponent,
    HeaderComponent,
    StudentComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    DashboardComponent,
    ProductListComponent,
    ProductComponent,
    ProductSectionComponent,
    ProductDetailComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    NoopAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXTscnZDg_Mt-siAEYSk4m9BPinRzN3Og'
    }),
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MyOwnCustomMaterialModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [MapResources,
    AuthenticationService,
    ProductsResources,
    DashboardResource,
    ProductService,
    LoginResource,
    ProductsSectionResolve,
    SharedService,
    AuthSellerGuard,
    AuthGuard,
    NotificationsService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule {
}
