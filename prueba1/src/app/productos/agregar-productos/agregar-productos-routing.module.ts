import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarProductosPage } from './agregar-productos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarProductosPageRoutingModule {}
