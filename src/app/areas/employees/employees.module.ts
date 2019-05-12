import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeesComponent } from './component/employees.component';

@NgModule({
    imports: [RouterModule],
    exports: [],
    declarations: [EmployeesComponent],
    providers: [],
})
class EmployeesModule { }

export { EmployeesModule };