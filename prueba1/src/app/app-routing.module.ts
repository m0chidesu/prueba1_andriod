import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'productos',
    children : [
      {
        path : "",
        loadChildren : () => import('./productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path : ":prodID",
        loadChildren: () => import('./productos/detalle-productos/detalle-productos.module').then(m => m.DetalleProductosPageModule)
      }
    ]
  },
  {
    path : "agregar-productos",
    loadChildren:() => import('./productos/agregar-productos/agregar-productos.module').then(m => m.AgregarProductosPageModule)
  },
  {
    path : "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
