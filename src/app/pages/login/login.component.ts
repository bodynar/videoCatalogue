import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { INotificator } from 'services/INotificator';
import { IUserService } from 'services/IUserService';

@Component({
    templateUrl: 'login.template.pug',
    styleUrls: ['login.style.styl']
})
class LoginComponent {
    constructor(
        private userService: IUserService,
        private notificator: INotificator,
    ) {
    }

    public authenticate(form: NgForm): void {
        try {
            this.userService.authorize('', '');
        } catch (error) {
            this.notificator.error(error);
        }
    }
}

export { LoginComponent };