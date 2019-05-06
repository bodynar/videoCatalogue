import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './component/user.component';

const routes: Routes = [
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
class UserRoutingModule { }

export { UserRoutingModule };