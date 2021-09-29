import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutComponent} from './blog.component';
import {AboutRoutingModule} from './blog-routing.module';
import {DateAgoPipe} from "../../../pipes/date-ago.pipe";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {SingleComponent} from './single/single.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent,
    DateAgoPipe,
    SingleComponent
  ],
  providers: [],
})
export class AboutModule {
}
