import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const customerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerListComponent
      }
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier }
  },
  {
    path: '', redirectTo: 'customer', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CustomerRoutingModule { }
