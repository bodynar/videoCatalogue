import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '**',
                component: PageNotFoundComponent
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
class PagesRoutingModule { }

export { PagesRoutingModule };