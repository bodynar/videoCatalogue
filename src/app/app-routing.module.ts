import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { areasRouting } from './areas/areas.routing';

import { WelcomeComponent } from 'components/welcome/welcome.component';
import { AppContainerComponent } from './components/appContainer/appContainer.component';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      ...areasRouting,
      {
        path: '',
        component: WelcomeComponent
      }
    ]
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