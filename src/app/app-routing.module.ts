import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
