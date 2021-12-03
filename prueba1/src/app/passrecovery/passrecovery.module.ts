import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassrecoveryPageRoutingModule } from './passrecovery-routing.module';

import { PassrecoveryPage } from './passrecovery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassrecoveryPageRoutingModule
  ],
  declarations: [PassrecoveryPage]
})
export class PassrecoveryPageModule {}
