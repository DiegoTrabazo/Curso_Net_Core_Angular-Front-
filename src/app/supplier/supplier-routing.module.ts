import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierContainerComponent } from './supplier-container.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';
import { Routes, RouterModule } from '@angular/router';

const supplierRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SupplierContainerComponent
      }
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(supplierRoutes)
  ],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
