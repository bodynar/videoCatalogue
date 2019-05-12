import { Routes } from '@angular/router';

import { EmployeesComponent } from './component/employees.component';

const employeesRoutes: Routes = [
    {
        path: 'employees',
        component: EmployeesComponent
    }
];

export { employeesRoutes };