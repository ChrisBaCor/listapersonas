import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modulo/login/login.component';
import { FormsModule } from '@angular/forms';
import { autenticacionComponent } from './Modulo/autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    autenticacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
