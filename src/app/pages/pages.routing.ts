import { Routes } from '@angular/router';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

const pagesRoutes: Routes = [
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    }
];

export { pagesRoutes };