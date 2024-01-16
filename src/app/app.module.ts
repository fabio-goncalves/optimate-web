import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FragmentsModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { AvatarModule } from './components/avatar/avatar.module';
import { ListUserComponent } from './pages/user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FragmentsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
