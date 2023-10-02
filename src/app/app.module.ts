import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FragmentsModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FragmentsModule,
    MaterialModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
