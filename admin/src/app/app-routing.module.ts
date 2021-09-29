import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_guard/auth-guard.service";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AdminComponent} from "./admin/admin.component";
import {UsersComponent} from "./admin/users/users.component";
import {UserNewComponent} from "./admin/users/user-new/user-new.component";
import {ProfileComponent} from "./admin/profile/profile.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {PostsComponent} from "./admin/posts/posts.component";
import {PostNewComponent} from "./admin/posts/post-new/post-new.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/admin/profile'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', canActivate: [AuthGuard], component: AdminComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/new', component: UserNewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'posts/new', component: PostNewComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
