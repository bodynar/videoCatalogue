import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './component/employees.component';

const routes: Routes = [
    {
        path: 'employees',
        children: [
            {
                path: '',
                component: EmployeesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
class EmployeesRoutingModule { }

export {
    EmployeesRoutingModule,
    routes,
};