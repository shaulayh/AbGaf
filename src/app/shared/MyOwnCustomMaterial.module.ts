import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgModule} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatBadgeModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatBadgeModule, MatIconModule],
})
export class MyOwnCustomMaterialModule {
}
