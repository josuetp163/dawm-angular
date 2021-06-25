import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

const routes: Routes = [
  {
      path: "",
      redirectTo: "/inicio",
      pathMatch: "full",
  },{
    path: "inicio",
    component: InicioComponent
  },{
    path: "informacion",
    component: InformacionComponent
  },{
    path: "**",
    redirectTo: "inicio"
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
