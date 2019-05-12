import { Routes } from '@angular/router';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

const pagesRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
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