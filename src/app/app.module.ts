import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


import { AppComponent } from './app.component';

// Import containers

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { PersonnelLoginComponent } from './views/personnel-login/personnel-login.component';
import { RegisterComponent } from './views/register/register.component';


import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { CardComponent } from './common/components/card/card.component';
import { DeadlineListComponent } from './common/components/deadline-list/deadline-list.component';
import { DeadlineItemComponent } from './common/components/deadline-list/deadline-item/deadline-item.component';
import { MessageListComponent } from './common/components/message-list/message-list.component';
import { MessageItemComponent } from './common/components/message-list/message-item/message-item.component';
import { SettingListComponent } from './common/components/setting-list/setting-list.component';
import { SettingItemComponent } from './common/components/setting-list/setting-item/setting-item.component';
import { TableComponent } from './common/components/table/table.component';
import { TableItemComponent } from './common/components/table/table-item/table-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './views/dashboard/dashboard-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProfilecardComponent } from './common/profilecard-list/profilecard/profilecard.component';
import { ProfilecardListComponent } from './common/profilecard-list/profilecard-list.component';
import { EtablissementComponent } from './direction/etablissement-list/etablissement/etablissement.component';
import { EtablissementListComponent } from './direction/etablissement-list/etablissement-list.component';
import { NotyetimplComponent } from './common/components/notyetimpl/notyetimpl.component';
import { UnitListComponent } from './direction/unit-list/unit-list.component';
import { DeleteUnitPopupComponent } from './common/components/delete-unit-popup/delete-unit-popup.component';
import { UnitCreateModifyComponent } from './direction/unit-create-modify/unit-create-modify.component';
import { UnitComponent } from './direction/unit/unit.component';
import { CreateResidentComponent } from './direction/create-resident/create-resident.component';
import { AffecterResidentComponent } from './direction/affecter-resident/affecter-resident.component';
import { ConsulterResidentComponent } from './direction/consulter-resident/consulter-resident.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { AgendaComponent } from './common/components/agenda/agenda.component';
import { MainLoginComponent } from './views/main-login/main-login.component';
import {InputsModule} from 'angular-bootstrap-md';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {environment} from '../environments/environment';
import {Toast, ToastrModule, ToastrService} from 'ngx-toastr';
import {AuthService} from './sharedServices/services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AccountService} from './sharedServices/services/account.service';
import { CompleteAccountComponent } from './views/complete-account/complete-account.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { DialogOverviewComponent } from './views/complete-account/dialog-overview/dialog-overview.component';
import { AjouterPersonnelComponent } from './direction/ajouter-personnel/ajouter-personnel.component';
import { ModifierPersonnelComponent } from './direction/modifier-personnel/modifier-personnel.component';
import { ConsulterListePersonnelComponent } from './direction/consulter-liste-personnel/consulter-liste-personnel.component';
import { ChangerUniteComponent } from './direction/changer-unite/changer-unite.component';
import { ConsulterCreneauxComponent } from './contact/consulter-creneaux/consulter-creneaux.component';
import { DeclarerAbsenceComponent } from './contact/declarer-absence/declarer-absence.component';
import { AnnulerRdvComponent } from './contact/annuler-rdv/annuler-rdv.component';
import { ModifierProfileComponent } from './personnel/modifier-profile/modifier-profile.component';
import { DeclarerResidentsComponent } from './personnel/declarer-residents/declarer-residents.component';
import { DeclarerCreneauxComponent } from './personnel/declarer-creneaux/declarer-creneaux.component';
import { PlanningCreneauxComponent } from './personnel/planning-creneaux/planning-creneaux.component';
import { ChangementStatutResidentComponent } from './personnel/changement-statut-resident/changement-statut-resident.component';
import {MatIconModule} from '@angular/material/icon';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { TableResidentsComponent } from './common/components/table-residents/table-residents.component';
import { TableResidentsItemComponent } from './common/components/table-residents/table-residents-item/table-residents-item.component';
import { UnitAddResidentComponent } from './direction/unit-add-resident/unit-add-resident.component';
import { UnitAddPersonnelComponent } from './direction/unit-add-personnel/unit-add-personnel.component';
import {NgProgress, NgProgressModule} from 'ngx-progressbar';
import {LoggerConfig, LoggerModule, NGXLogger, NgxLoggerLevel} from 'ngx-logger';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    MatTableModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    PaginationModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    InputsModule,
    NgSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NgProgressModule.withConfig({
      spinnerPosition: 'left',
      thick: true
    }),
    ToastrModule.forRoot({
      timeOut: 2500,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    HttpClientModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatCheckboxModule,
    LoggerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    P404Component,
    P500Component,
    PersonnelLoginComponent,
    RegisterComponent,
    DeadlineListComponent,
    DeadlineItemComponent,
    MessageListComponent,
    MessageItemComponent,
    SettingListComponent,
    SettingItemComponent,
    TableComponent,
    TableItemComponent,
    TableResidentsComponent,
    TableResidentsItemComponent,
    DashboardComponent,
    CardComponent,
    ProfilecardComponent,
    ProfilecardListComponent,
    EtablissementComponent,
    EtablissementListComponent,
    NotyetimplComponent,
    UnitComponent,
    UnitCreateModifyComponent,
    UnitListComponent,
    DeleteUnitPopupComponent,
    CreateResidentComponent,
    AffecterResidentComponent,
    ConsulterResidentComponent,
    MainLoginComponent,
    AgendaComponent,
    AjouterPersonnelComponent,
    ModifierPersonnelComponent,
    CompleteAccountComponent,
    DialogOverviewComponent,
    ConsulterListePersonnelComponent,
    ChangerUniteComponent,
    ConsulterCreneauxComponent,
    DeclarerAbsenceComponent,
    AnnulerRdvComponent,
    ModifierProfileComponent,
    DeclarerResidentsComponent,
    DeclarerCreneauxComponent,
    PlanningCreneauxComponent,
    ChangementStatutResidentComponent,
    AgendaComponent,
    UnitAddResidentComponent,
    UnitAddPersonnelComponent
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, AuthService, HttpClient, NgProgress, AngularFireAuth, ToastrService, AccountService, NGXLogger, LoggerConfig,  {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
