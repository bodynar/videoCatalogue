import { Component } from '@angular/core';

import { IUserService } from 'services/IUserService';
import { ICurrentUser } from 'services/ICurrentUser';

@Component({
    templateUrl: 'user.template.pug',
    styleUrls: ['user.style.styl']
})
class UserComponent {
    constructor(
        private currentUser: ICurrentUser,
        private userService: IUserService,
    ) {
    }
}

export { UserComponent };