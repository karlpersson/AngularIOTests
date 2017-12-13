import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent }     from './dashboard.component';
import { DashboardHeroComponent } from '../dashboard-hero/dashboard-hero.component';
import { CommonModule } from '@angular/common';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports:      [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ DashboardComponent, DashboardHeroComponent ]
})
export class DashboardModule { }