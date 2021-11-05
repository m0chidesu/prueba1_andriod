import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPage } from './productos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  },
  {
    path: 'detalle-productos',
    loadChildren: () => import('./detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
  },
  {
    path: 'agregar-productos',
    loadChildren: () => import('./agregar-productos/agregar-productos.module').then( m => m.AgregarProductosPageModule)
  },
  {
    path: 'actualizar-productos',
    loadChildren: () => import('./actualizar-productos/actualizar-productos.module').then( m => m.ActualizarProductosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}
