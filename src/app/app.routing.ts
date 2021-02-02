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
import { UnitListComponent } from './direction/unit-list/unit-list.component';
import { UnitCreateComponent } from './direction/unit-create/unit-create.component';
import { UnitComponent } from './direction/unit/unit.component';
import { DeleteUnitPopupComponent } from './common/components/delete-unit-popup/delete-unit-popup.component';
import {CreateResidentComponent} from './direction/create-resident/create-resident.component';
import {AffecterResidentComponent} from './direction/affecter-resident/affecter-resident.component';
import {ConsulterResidentComponent} from './direction/consulter-resident/consulter-resident.component';
import {AgendaComponent} from './common/components/agenda/agenda.component';
import {AjouterPersonnelComponent} from './direction/ajouter-personnel/ajouter-personnel.component';
import {ConsulterListePersonnelComponent} from './direction/consulter-liste-personnel/consulter-liste-personnel.component';
import {ModifierPersonnelComponent} from './direction/modifier-personnel/modifier-personnel.component';
import {ChangerUniteComponent} from './direction/changer-unite/changer-unite.component';
import {ConsulterCreneauxComponent} from './contact/consulter-creneaux/consulter-creneaux.component';
import {DeclarerAbsenceComponent} from './contact/declarer-absence/declarer-absence.component';
import {AnnulerRdvComponent} from './contact/annuler-rdv/annuler-rdv.component';
import {ModifierProfileComponent} from './personnel/modifier-profile/modifier-profile.component';
import {DeclarerResidentsComponent} from './personnel/declarer-residents/declarer-residents.component';
import {DeclarerCreneauxComponent} from './personnel/declarer-creneaux/declarer-creneaux.component';


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
      {path: 'dashboard', component: DashboardComponent},
      {path: 'residents/declarer', component: DeclarerResidentsComponent},
      {path: 'residents/contacte', component: NotyetimplComponent},
      {path: 'residents/changer', component: ModifierProfileComponent},
      {path: 'calendrier/declarer', component: DeclarerCreneauxComponent}
    ]
  },
  {path: 'direction', component: DefaultLayoutComponent, data: {title: 'Home'},
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'residents/créer', component: CreateResidentComponent},
      {path: 'residents/affecter', component: AffecterResidentComponent},
      {path: 'residents/changement', component: ChangerUniteComponent},
      {path: 'unites', component: UnitListComponent},
      {path: 'unites/creer', component: UnitCreateComponent},
      {path: 'unites/consulter', component: UnitComponent},
      {path: 'unites/modifier', component: UnitCreateComponent},
      {path: 'calendrier/declarer', component: AgendaComponent},
      {path: 'calendrier/consulter', component: AgendaComponent},
      {path: 'residents/consulter', component: ConsulterResidentComponent},
      {path: 'personnels/créer', component: AjouterPersonnelComponent},
      {path: 'personnels/affecter', component: ModifierPersonnelComponent},
      {path: 'personnels/list', component: ConsulterListePersonnelComponent}
    ]
  },
  {path: 'contact', component: DefaultLayoutComponent, data: {title: 'Home'},
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'calendrier', component: NotyetimplComponent},
      {path: 'calendrier/consulter', component: ConsulterCreneauxComponent},
      {path: 'rendezvous/absence', component: DeclarerAbsenceComponent},
      {path: 'rendezvous/annuler', component: AnnulerRdvComponent},
      {path: 'rendezvous/reservation', component: NotyetimplComponent} // à enlever
    ]
  },  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
