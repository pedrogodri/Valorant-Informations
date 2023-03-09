import { BundlesComponent } from './components/bundles/bundles.component';
import { DetailWeaponComponent } from './components/arsenal/detail-weapon/detail-weapon.component';
import { ArsenalComponent } from './components/arsenal/arsenal/arsenal.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponComponent } from './components/arsenal/weapon/weapon.component';
import { AgentsComponent } from './components/agents/agents.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'arsenal', component: ArsenalComponent},
  {path: 'weapon', component: WeaponComponent},
  {path: 'detailWeapon/:uuid', component: DetailWeaponComponent},
  {path: 'agents', component: AgentsComponent},
  {path: 'agents/:uuid', component: AgentsComponent},
  {path: 'bundles', component: BundlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
