import { Component } from '@angular/core';

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

    public authenticate(): void {
        this.userService.authorize('', '');
    }
}

export { LoginComponent };