import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './areas/videos/component/videos.component';
import { EmployeesComponent } from './areas/employees/component/employees.component';
import { VideosModule } from './areas/videos/videos.module';
import { EmployeesModule } from './areas/employees/employees.module';

const routes: Routes = [
  {
    path: 'videos',
    pathMatch: 'full',
    component: VideosComponent
  },
  {
    path: 'employees',
    pathMatch: 'full',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    VideosModule,
    EmployeesModule
  ],
  exports: [RouterModule]
})
class AppRoutingModule { }

export { AppRoutingModule };