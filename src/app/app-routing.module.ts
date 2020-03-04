import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduccionComponent } from "./componentes/negocio/produccion/produccion.component";
import { EdicionComponent } from "./componentes/negocio/edicion/edicion.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ContactoComponent } from "./componentes/shared/contacto/contacto.component";



const routes: Routes = [
  { path: 'produccion', component: ProduccionComponent },
  { path: 'editoriales', component: EdicionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
