import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './views/persona/persona.component';
import { ClientalumnoDirective } from './directive/clientalumno.directive';
import { AnimatePersonDirective } from './directive/animate-person.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    AnimatePersonDirective,
    ClientalumnoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
