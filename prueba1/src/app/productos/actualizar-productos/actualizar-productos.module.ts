import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarProductosPageRoutingModule } from './actualizar-productos-routing.module';

import { ActualizarProductosPage } from './actualizar-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarProductosPageRoutingModule
  ],
  declarations: [ActualizarProductosPage]
})
export class ActualizarProductosPageModule {}
