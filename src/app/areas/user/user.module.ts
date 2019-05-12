import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './component/user.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [],
    declarations: [UserComponent],
    providers: [],
})
class UserModule { }

export { UserModule };