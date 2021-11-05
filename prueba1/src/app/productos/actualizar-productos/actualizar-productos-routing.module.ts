import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarProductosPage } from './actualizar-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarProductosPageRoutingModule {}
