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
import {MapService} from './map.service';
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
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXTscnZDg_Mt-siAEYSk4m9BPinRzN3Og'
    })
  ],
  providers: [MapResources, AuthenticationService,
    MapService, ProductsResources,
    DashboardResource,
    LoginResource],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule {
}
