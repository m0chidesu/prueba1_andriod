import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassrecoveryPage } from './passrecovery.page';

const routes: Routes = [
  {
    path: '',
    component: PassrecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassrecoveryPageRoutingModule {}
