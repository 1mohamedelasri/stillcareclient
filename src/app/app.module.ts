import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
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
import { LoginComponent } from './views/login/login.component';
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
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {DashboardRoutingModule} from './views/dashboard/dashboard-routing.module';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DefaultLayoutComponent} from "./containers/default-layout/default-layout.component";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { ProfilecardComponent } from './common/profilecard-list/profilecard/profilecard.component';
import { ProfilecardListComponent } from './common/profilecard-list/profilecard-list.component';
import { EtablissementComponent } from './direction/etablissement-list/etablissement/etablissement.component';
import { EtablissementListComponent } from './direction/etablissement-list/etablissement-list.component';
import { NotyetimplComponent } from './common/components/notyetimpl/notyetimpl.component';
import { CreateResidentComponent } from './direction/create-resident/create-resident.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AffecterResidentComponent } from './direction/affecter-resident/affecter-resident.component';
import { ConsulterResidentComponent } from './direction/consulter-resident/consulter-resident.component';

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
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DeadlineListComponent,
    DeadlineItemComponent,
    MessageListComponent,
    MessageItemComponent,
    SettingListComponent,
    SettingItemComponent,
    TableComponent,
    TableItemComponent,
    DashboardComponent,
    CardComponent,
    ProfilecardComponent,
    ProfilecardListComponent,
    EtablissementComponent,
    EtablissementListComponent,
    NotyetimplComponent,
    CreateResidentComponent,
    AffecterResidentComponent,
    ConsulterResidentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
