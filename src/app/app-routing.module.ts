import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from 'components/welcome/welcome.component';
import { AppContainerComponent } from './components/appContainer/appContainer.component';

import { employeesRoutes } from './areas/employees/employess.routing';
import { userRoutes } from './areas/user/user.routing';
import { videoRoutes } from './areas/videos/videos.routing';
import { pagesRoutes } from './pages/pages.routing';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      ...videoRoutes,
      ...userRoutes,
      ...employeesRoutes
    ]
  },
  ...pagesRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
class AppRoutingModule { }

export { AppRoutingModule };