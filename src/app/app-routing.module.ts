import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContainerComponent } from './components/appContainer/appContainer.component';
import { areasRouting } from './areas/areas.routing';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [...areasRouting]
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