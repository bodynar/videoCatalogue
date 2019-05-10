import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserComponent } from './component/user.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
    ],
    exports: [],
    declarations: [UserComponent],
    providers: [],
})
class UserModule { }

export { UserModule };