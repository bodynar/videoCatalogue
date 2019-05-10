import { Component } from '@angular/core';

import { ICurrentUser } from 'services/ICurrentUser';
import { IUserService } from 'services/IUserService';

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