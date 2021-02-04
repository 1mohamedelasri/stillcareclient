import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers

import { P404Component } from './views/error/404.component';
import { RegisterComponent } from './views/register/register.component';
import { TableComponent } from './common/components/table/table.component';
import { CardComponent } from './common/components/card/card.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { NotyetimplComponent } from './common/components/notyetimpl/notyetimpl.component';
import { UnitListComponent } from './direction/unit-list/unit-list.component';
import { UnitCreateComponent } from './direction/unit-create/unit-create.component';
import { UnitComponent } from './direction/unit/unit.component';
import { CreateResidentComponent } from './direction/create-resident/create-resident.component';
import { AffecterResidentComponent } from './direction/affecter-resident/affecter-resident.component';
import { ConsulterResidentComponent } from './direction/consulter-resident/consulter-resident.component';
import { AgendaComponent } from './common/components/agenda/agenda.component';
import { AjouterPersonnelComponent } from './direction/ajouter-personnel/ajouter-personnel.component';
import { ConsulterListePersonnelComponent } from './direction/consulter-liste-personnel/consulter-liste-personnel.component';
import { ChangerUniteComponent } from './direction/changer-unite/changer-unite.component';
import { ConsulterCreneauxComponent } from './contact/consulter-creneaux/consulter-creneaux.component';
import { DeclarerAbsenceComponent } from './contact/declarer-absence/declarer-absence.component';
import { AnnulerRdvComponent } from './contact/annuler-rdv/annuler-rdv.component';
import { DeclarerResidentsComponent } from './personnel/declarer-residents/declarer-residents.component';
import { DeclarerCreneauxComponent } from './personnel/declarer-creneaux/declarer-creneaux.component';
import { ReserverRdvComponent } from './contact/reserver-rdv/reserver-rdv.component';
import { ChangementStatutResidentComponent } from './personnel/changement-statut-resident/changement-statut-resident.component';
import { PlanningCreneauxComponent } from './personnel/planning-creneaux/planning-creneaux.component';
import { ValiderContactComponent } from './personnel/valider-contact/valider-contact.component';
import { CreneauLibreComponent } from './personnel/creneau-libre/creneau-libre.component';
import { AnnuleRendezVousComponent } from './personnel/annule-rendez-vous/annule-rendez-vous.component';
import { ValiderReservationComponent } from './personnel/valider-réservation/valider-reservation.component';
import { ProfileInfoDirectionComponent } from './direction/profile-info-direct/profile-info-direct.component';
import { ProfileInfoContactComponent } from './contact/profile-info-contact/profile-info-contact.component';
import { ProfileInfoPersonnelComponent } from './personnel/profile-info-personnel/profile-info-personnel.component';
import { ModifierPersonnelComponent } from './direction/modifier-personnel/modifier-personnel.component';
import { ReporterRDVComponent } from './personnel/reporter-rdv/reporter-rdv.component';

export const routes: Routes = [
  { path: '', redirectTo: 'direction', pathMatch: 'full' },
  { path: '404', component: P404Component, data: { title: 'Page 404' } },
  { path: '500', component: TableComponent, data: { title: 'Page 500' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
  { path: 'card', component: CardComponent, data: { title: 'Login Page' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register Page' } },
  { path: 'dashboard', component: DefaultLayoutComponent, data: { title: 'Register Page' } },

  // Espace du personnel
  {
    path: 'personnel', component: DefaultLayoutComponent, data: { title: 'Home' },
    children: [
      { path: 'profile', component: ProfileInfoPersonnelComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'residents/declarer', component: DeclarerResidentsComponent },
      { path: 'residents/changer', component: ChangementStatutResidentComponent },
      { path: 'contact/valider', component: ValiderContactComponent },
      { path: 'calendrier/declarer', component: DeclarerCreneauxComponent },
      { path: 'calendrier/consulter', component: PlanningCreneauxComponent },
      { path: 'calendrier/creneau-libre', component: CreneauLibreComponent },
      { path: 'rendezvous/valider-refuser', component: ValiderReservationComponent },
      { path: 'rendezvous/annuler', component: AnnuleRendezVousComponent },
      { path: 'rendezvous/details', component: NotyetimplComponent },
      { path: 'rendezvous/reporter', component: ReporterRDVComponent },
    ]
  },
  // Espace de la direction
  {
    path: 'direction', component: DefaultLayoutComponent, data: { title: 'Home' },
    children: [
      { path: 'profile', component: ProfileInfoDirectionComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'residents/créer', component: CreateResidentComponent },
      { path: 'residents/affecter', component: AffecterResidentComponent },
      { path: 'residents/changer', component: ChangerUniteComponent },
      { path: 'unites', component: UnitListComponent },
      { path: 'unites/creer', component: UnitCreateComponent },
      { path: 'unites/consulter', component: UnitComponent },
      { path: 'unites/modifier', component: UnitCreateComponent },
      { path: 'calendrier/declarer', component: AgendaComponent },
      { path: 'calendrier/consulter', component: AgendaComponent },
      { path: 'residents/consulter', component: ConsulterResidentComponent },
      { path: 'personnels/créer', component: AjouterPersonnelComponent },
      { path: 'personnels/affecter', component: ModifierPersonnelComponent },
      { path: 'personnels/consulter', component: ConsulterListePersonnelComponent }
    ]
  },

  // Espace du contact
  {
    path: 'contact', component: DefaultLayoutComponent, data: { title: 'Home' },
    children: [
      { path: 'profile', component: ProfileInfoContactComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'calendrier', component: NotyetimplComponent },
      { path: 'calendrier/consulter', component: ConsulterCreneauxComponent },
      { path: 'calendrier/reserver', component: ReserverRdvComponent },
      { path: 'rendezvous/absence-annuler', component: DeclarerAbsenceComponent },
      { path: 'reservation/annuler', component: AnnulerRdvComponent },
    ]
  }, { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
