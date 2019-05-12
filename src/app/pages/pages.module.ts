import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        LoginComponent, PageNotFoundComponent, ForbiddenComponent
    ],
    providers: [],
})
class PagesModule { }

export { PagesModule };