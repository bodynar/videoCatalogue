import { Component, OnInit } from '@angular/core';

import { IUserService } from 'src/app/services/contracts/IUserService';
import { ICurrentUser } from 'src/app/services/contracts/ICurrentUser';

@Component({
    templateUrl: 'user.template.pug',
    styleUrls: ['user.style.styl']
})
class UserComponent implements OnInit {
    constructor(
        private currentUser: ICurrentUser,
        private userService: IUserService,
    ) {
    }

    public ngOnInit(): void {
    }
}

export { UserComponent };