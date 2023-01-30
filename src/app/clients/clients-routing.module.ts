import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsPage } from './clients.page';
import { CompaintOrderPage } from './compaint-order/compaint-order.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsPage
  },
  {
    path: 'compaintOrder',
    component: CompaintOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsPageRoutingModule {}
