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

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
      {path: 'direction/dashboard', component: DashboardComponent},
      {path: 'direction/residents/créer', component: NotyetimplComponent},
      {path: 'direction/residents/affecter', component: NotyetimplComponent},
      {path: 'direction/residents/changement', component: NotyetimplComponent},
      {path: 'direction/calendrier/declarer', component: NotyetimplComponent},
      {path: 'direction/calendrier/consulter', component: NotyetimplComponent},
      {path: 'direction/unite/creer', component: NotyetimplComponent},
      {path: 'direction/unite/modifier', component: NotyetimplComponent},
      {path: 'direction/unite/supprimer', component: NotyetimplComponent},
      {path: 'direction/unite/reporter', component: NotyetimplComponent},
      {path: 'direction/unite/affecter', component: NotyetimplComponent}
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
