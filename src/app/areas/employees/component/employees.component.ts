import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'employees.template.pug',
    styleUrls: ['employees.style.styl']
})

class EmployeesComponent implements OnInit {
    constructor(
    ) {
    }

    public ngOnInit(): void { }
}

export { EmployeesComponent };