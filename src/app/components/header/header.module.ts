import { UserStoreModule } from "@/store/user/user-store.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { CurrentUserComponent } from './current-user/current-user.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CurrentUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserStoreModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
