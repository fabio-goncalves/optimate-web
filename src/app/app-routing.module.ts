import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainShellComponent } from './shared/main-shell/main-shell.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'list-user',
        component: ListUserComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
