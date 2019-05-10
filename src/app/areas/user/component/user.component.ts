import { Component } from '@angular/core';

import { IUserService } from 'src/app/services/contracts/IUserService';
import { ICurrentUser } from 'src/app/services/contracts/ICurrentUser';

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