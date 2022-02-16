import { UserStoreModule } from "@/store/user/user-store.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrentUserComponent } from './current-user/current-user.component';
import { HeaderComponent } from './header.component';


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
