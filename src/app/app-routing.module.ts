import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './areas/employees/component/employees.component';
import { LoginComponent } from './pages/login/component/login.component';

const routes: Routes = [
  {
    path: 'employees',
    pathMatch: 'full',
    component: EmployeesComponent
  },
  {
    path: 'login',
    component: LoginComponent // todo: add redirect if not logged in
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