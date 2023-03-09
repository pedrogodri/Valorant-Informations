import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArsenalComponent } from './components/arsenal/arsenal/arsenal.component';
import { WeaponComponent } from './components/arsenal/weapon/weapon.component';
import { DetailWeaponComponent } from './components/arsenal/detail-weapon/detail-weapon.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentComponent } from './components/agents/agent/agent.component';
import { BundlesComponent } from './components/bundles/bundles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WeaponComponent,
    ArsenalComponent,
    DetailWeaponComponent,
    AgentsComponent,
    AgentComponent,
    BundlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
