import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers

import { P404Component } from './views/error/404.component';
import { RegisterComponent } from './views/register/register.component';
import {TableComponent} from './components/table/table.component';
import {CardComponent} from './components/card/card.component';
import {LoginComponent} from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DefaultLayoutComponent} from "./containers/default-layout/default-layout.component";
import {ProfilecardComponent} from "./components/profilecard-list/profilecard/profilecard.component";
import {ProfilecardListComponent} from "./components/profilecard-list/profilecard-list.component";
import {EtablissementListComponent} from "./components/etablissement-list/etablissement-list.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: TableComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'card',
    component: CardComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },      {
        path: 'Personnes/Personnel',
        component: ProfilecardListComponent
      },
      {
        path: 'etablissement/liste',
        component: EtablissementListComponent
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
