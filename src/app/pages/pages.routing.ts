import { Routes } from '@angular/router';

import { LoginGuard } from '../guards/login.guard';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

const pagesRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [LoginGuard]
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export { pagesRoutes };