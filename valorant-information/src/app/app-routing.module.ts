import { ListArsenalComponent } from './components/arsenal/list-arsenal/list-arsenal.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWeaponComponent } from './components/arsenal/list-weapon/list-weapon.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'listArsenal', component: ListArsenalComponent},
  {path: 'listWeapon', component: ListWeaponComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
