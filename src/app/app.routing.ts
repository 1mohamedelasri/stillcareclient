import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers

import { P404Component } from './views/error/404.component';
import { RegisterComponent } from './views/register/register.component';
import {TableComponent} from './common/components/table/table.component';
import {CardComponent} from './common/components/card/card.component';
import {LoginComponent} from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DefaultLayoutComponent} from './containers/default-layout/default-layout.component';
import {ProfilecardComponent} from './common/profilecard-list/profilecard/profilecard.component';
import {ProfilecardListComponent} from './common/profilecard-list/profilecard-list.component';
import {EtablissementListComponent} from './direction/etablissement-list/etablissement-list.component';
import {NotyetimplComponent} from './common/components/notyetimpl/notyetimpl.component';
import {CreateResidentComponent} from './direction/create-resident/create-resident.component';
import {AffecterResidentComponent} from './direction/affecter-resident/affecter-resident.component';
import {ConsulterResidentComponent} from "./direction/consulter-resident/consulter-resident.component";

export const routes: Routes = [
  {path: '', redirectTo: 'direction', pathMatch: 'full'},
  {path: '404', component: P404Component, data: {title: 'Page 404'}},
  {path: '500', component: TableComponent, data: {title: 'Page 500'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login Page'}},
  {path: 'card', component: CardComponent, data: {title: 'Login Page'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register Page'}},
  {path: 'dashboard', component: DefaultLayoutComponent, data: {title: 'Register Page'}},
  {path: 'personnel', component: DefaultLayoutComponent, data: {title: 'Home'},
    children: [
      {path: 'personnel/dashboard', component: DashboardComponent},
      {path: 'personnel/residents/declarer', component: NotyetimplComponent},
      {path: 'personnel/residents/contacte', component: NotyetimplComponent},
      {path: 'personnel/residents/changer', component: NotyetimplComponent},
    ]
  },
  {path: 'direction', component: DefaultLayoutComponent, data: {title: 'Home'},
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'residents/créer', component: CreateResidentComponent},
      {path: 'residents/affecter', component: AffecterResidentComponent},
      {path: 'residents/changement', component: NotyetimplComponent},
      {path: 'residents/consulter', component: ConsulterResidentComponent},
      {path: 'calendrier/declarer', component: NotyetimplComponent},
      {path: 'calendrier/consulter', component: NotyetimplComponent},
      {path: 'unite/creer', component: NotyetimplComponent},
      {path: 'unite/modifier', component: NotyetimplComponent},
      {path: 'unite/supprimer', component: NotyetimplComponent},
      {path: 'unite/reporter', component: NotyetimplComponent},
      {path: 'unite/affecter', component: NotyetimplComponent}
    ]
  },
  {path: 'contact', component: DefaultLayoutComponent, data: {title: 'Home'},
    children: [
      {path: 'contact/dashboard', component: DashboardComponent},
      {path: 'contact/calendrier', component: NotyetimplComponent},
      {path: 'contact/calendrier/consulter', component: NotyetimplComponent},
      {path: 'contact/rendezvous/absence', component: NotyetimplComponent},
      {path: 'contact/rendezvous/annuler', component: NotyetimplComponent},
      {path: 'contact/rendezvous/reservation', component: NotyetimplComponent}
    ]
  },  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
