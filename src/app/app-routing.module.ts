import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { areasRouting } from './areas/areas.routing';
import { AppContainerComponent } from './components/appContainer/appContainer.component';

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