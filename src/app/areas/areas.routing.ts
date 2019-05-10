import { Route } from '@angular/compiler/src/core';

import { routes as videoRoutes } from './videos/videos.routing';
import { routes as userRoutes } from './user/user.routing';
import { routes as employeeRoutes } from './employees/employess.routing';

const areasRouting: Array<Route> = [
    ...videoRoutes,
    ...userRoutes,
    ...employeeRoutes
];

export { areasRouting };