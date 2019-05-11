import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    exports: [],
    declarations: [
        LoginComponent, PageNotFoundComponent
    ],
    providers: [],
})
class PagesModule { }

export { PagesModule };