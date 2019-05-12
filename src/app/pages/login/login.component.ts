import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICurrentUser } from 'services/ICurrentUser';
import { IUserService } from 'services/IUserService';

@Component({
    templateUrl: 'login.template.pug',
    styleUrls: ['login.style.styl']
})
class LoginComponent {
    constructor(
        private currentUser: ICurrentUser,
        private userService: IUserService,
    ) {
    }

    public authenticate(form: NgForm): void {
        console.warn(form);
        // this.userService.authorize('', '');
    }
}

export { LoginComponent };