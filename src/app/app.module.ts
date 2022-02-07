import { AbstractAuthApiService } from "@/api/abstract-auth-api.service";
import { AuthApiService } from "@/api/auth-api.service";
import { httpInterceptorProviders } from "@/interceptors";
import { RedirectComponent } from "@/pages/redirect/redirect.component";
import { AppStoreModule } from "@/store/app-store.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: AbstractAuthApiService, useClass: AuthApiService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
