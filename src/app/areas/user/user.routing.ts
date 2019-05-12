import { Routes } from '@angular/router';

import { UserComponent } from './component/user.component';

const userRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent
    }
];
export { userRoutes };