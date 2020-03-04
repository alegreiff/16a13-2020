import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { EdicionComponent } from './componentes/negocio/edicion/edicion.component';
import { ProduccionComponent } from './componentes/negocio/produccion/produccion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/shared/contacto/contacto.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EdicionComponent,
    ProduccionComponent,
    InicioComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
