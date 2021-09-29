import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './blog.component';
import {SingleComponent} from "./single/single.component";

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
