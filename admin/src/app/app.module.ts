import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthServiceService} from "./_services/auth-service.service";
import {FormsModule} from "@angular/forms";
import {UserServiceService} from "./_services/user-service.service";
import {AuthGuard} from "./_guard/auth-guard.service";

import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzImageModule} from 'ng-zorro-antd/image';

import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './admin/users/users.component';
import {UserNewComponent} from './admin/users/user-new/user-new.component';
import {ProfileComponent} from './admin/profile/profile.component';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {PostsComponent} from './admin/posts/posts.component';
import {NzSpaceModule} from "ng-zorro-antd/space";
import {PostNewComponent} from './admin/posts/post-new/post-new.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {NzUploadModule} from "ng-zorro-antd/upload";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    AdminComponent,
    UsersComponent,
    UserNewComponent,
    ProfileComponent,
    DashboardComponent,
    PostsComponent,
    PostNewComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzInputModule,
        NzCardModule,
        NzFormModule,
        NzButtonModule,
        NzTableModule,
        NzSelectModule,
        NzDrawerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzTabsModule,
        NzImageModule,
        NzSpaceModule,
        AngularEditorModule,
        NzUploadModule
    ],
  providers: [
    AuthServiceService,
    UserServiceService,
    AuthGuard,
    NzMessageService,
    NzModalService,
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
