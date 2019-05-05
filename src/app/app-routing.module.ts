import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './areas/employees/component/employees.component';

const routes: Routes = [
  {
    path: 'employees',
    pathMatch: 'full',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
class AppRoutingModule { }

export { AppRoutingModule };