import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTiersCompComponent } from './components/list/list-tiers-comp/list-tiers-comp.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsTiersCompComponent } from './components/details/details-tiers-comp/details-tiers-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTiersCompComponent,
    HomeComponent,
    NavbarComponent,
    DetailsTiersCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
