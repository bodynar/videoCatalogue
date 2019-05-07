import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notFound/notFound.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        LoginComponent, PageNotFoundComponent
    ],
    providers: [],
})
class PagesModule { }

export { PagesModule };