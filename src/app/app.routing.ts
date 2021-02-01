import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers

import { P404Component } from './views/error/404.component';
import { RegisterComponent } from './views/register/register.component';
import {TableComponent} from './common/components/table/table.component';
import {CardComponent} from './common/components/card/card.component';
import {PersonnelLoginComponent} from './views/personnel-login/personnel-login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DefaultLayoutComponent} from './containers/default-layout/default-layout.component';
import {ProfilecardComponent} from './common/profilecard-list/profilecard/profilecard.component';
import {ProfilecardListComponent} from './common/profilecard-list/profilecard-list.component';
import {EtablissementListComponent} from './direction/etablissement-list/etablissement-list.component';
import {NotyetimplComponent} from './common/components/notyetimpl/notyetimpl.component';
import { UnitListComponent } from './direction/unit-list/unit-list.component';
import { UnitCreateModifyComponent } from './direction/unit-create-modify/unit-create-modify.component';
import { UnitComponent } from './direction/unit/unit.component';
import { DeleteUnitPopupComponent } from './common/components/delete-unit-popup/delete-unit-popup.component';
import { UnitAddResidentComponent } from './direction/unit-add-resident/unit-add-resident.component';
import { UnitAddPersonnelComponent } from './direction/unit-add-personnel/unit-add-personnel.component';
import {CreateResidentComponent} from './direction/create-resident/create-resident.component';
import {AffecterResidentComponent} from './direction/affecter-resident/affecter-resident.component';
import {ConsulterResidentComponent} from './direction/consulter-resident/consulter-resident.component';
import {AgendaComponent} from './common/components/agenda/agenda.component';
import {MainLoginComponent} from './views/main-login/main-login.component';
import {AjouterPersonnelComponent} from './personnel/ajouter-personnel/ajouter-personnel.component';
import {ConsulterListePersonnelComponent} from './personnel/consulter-liste-personnel/consulter-liste-personnel.component';
import {ModifierPersonnelComponent} from './personnel/modifier-personnel/modifier-personnel.component';
import {Role} from './sharedServices/models/Role';
import {AuthGuard} from './sharedServices/helpers/guard/auth.guard';
import {DirectionGuard} from './sharedServices/helpers/guard/direction.guard';
import {ContactGuard} from "./sharedServices/helpers/guard/contact.guard";
import {PersonnelGuard} from "./sharedServices/helpers/guard/personnel.guard";
import {CompleteAccountComponent} from "./views/complete-account/complete-account.component";

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '404', component: P404Component, data: {title: 'Page 404'}},
  {path: '500', component: TableComponent, data: {title: 'Page 500'}},
  {path: 'personnel-login', component: PersonnelLoginComponent, data: {title: 'Login Page'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register Page'}},
  {path: 'complete-account', component: CompleteAccountComponent, data: {title: 'Register Page'}},
  {path: 'dashboard', component: DefaultLayoutComponent, data: {title: 'Register Page'}, canActivate: [AuthGuard, DirectionGuard]},
  {path: 'main-login', component: MainLoginComponent},
  {path: 'personnel', component: DefaultLayoutComponent,
    data: {title: 'Home', role: Role.Personnel},
    canActivate: [AuthGuard, PersonnelGuard],
    children: [
      {path: 'personnel/dashboard', component: DashboardComponent},
      {path: 'personnel/residents/declarer', component: NotyetimplComponent},
      {path: 'personnel/residents/contacte', component: NotyetimplComponent},
      {path: 'personnel/residents/changer', component: NotyetimplComponent},
    ]
  },
  // tslint:disable-next-line:max-line-length
  {path: 'direction', component: DefaultLayoutComponent, data: {title: 'Home', role: Role.Direction}, canActivate: [AuthGuard, DirectionGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'residents/créer', component: CreateResidentComponent},
      {path: 'residents/affecter', component: AffecterResidentComponent},
      {path: 'residents/changement', component: NotyetimplComponent},
      {path: 'unites', component: UnitListComponent},
      {path: 'unites/creer', component: UnitCreateModifyComponent},
      {path: 'unites/consulter', component: UnitComponent},
      {path: 'unites/modifier', component: UnitCreateModifyComponent},
      {path: 'unites/add-resident', component: UnitAddResidentComponent},
      {path: 'unites/add-personnel', component: UnitAddPersonnelComponent},
      {path: 'calendrier/declarer', component: AgendaComponent},
      {path: 'calendrier/consulter', component: AgendaComponent},
      {path: 'personnels/créer', component: AjouterPersonnelComponent},
      {path: 'personnels/affecter', component: ModifierPersonnelComponent},
      {path: 'personnels/list', component: ConsulterListePersonnelComponent}
    ]  },
  {path: 'contact', component: DefaultLayoutComponent, data: {title: 'Home', role: Role.Contact}, canActivate: [AuthGuard, ContactGuard],
    children: [
      {path: 'contact/dashboard', component: DashboardComponent},
      {path: 'contact/calendrier', component: NotyetimplComponent},
      {path: 'contact/calendrier/consulter', component: NotyetimplComponent},
      {path: 'contact/rendezvous/absence', component: NotyetimplComponent},
      {path: 'contact/rendezvous/annuler', component: NotyetimplComponent},
      {path: 'contact/rendezvous/reservation', component: NotyetimplComponent}
    ]
  },
  {path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
