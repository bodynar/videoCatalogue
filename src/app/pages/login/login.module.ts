import { NgModule } from '@angular/core';

import { LoginComponent } from './component/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
class LoginModule { }

export { LoginModule };