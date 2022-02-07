import { AbstractAuthApiService } from "@/api/abstract-auth-api.service";
import { AuthApiService } from "@/api/auth-api.service";
import { HeaderModule } from "@/components/header/header.module";
import { NavigationModule } from "@/components/navigation/navigation.module";
import { httpInterceptorProviders } from "@/interceptors";
import { RedirectComponent } from "@/pages/redirect/redirect.component";
import { SeatplanComponent } from "@/pages/seatplan/seatplan.component";
import { SeatplanModule } from "@/pages/seatplan/seatplan.module";
import { AppStoreModule } from "@/store/app-store.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    DashboardComponent,
    SeatplanComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    HeaderModule,
    NavigationModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: AbstractAuthApiService, useClass: AuthApiService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
