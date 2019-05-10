import { Injectable } from '@angular/core';

import { isNullOrUndefined } from 'util';

import { ICurrentUser } from 'services/ICurrentUser';

import { User } from 'models/user';

@Injectable()
class CurrentUserService implements ICurrentUser {
    public user: User;

    constructor(
    ) {
    }

    public isAuthorized(): boolean {
        return !isNullOrUndefined(this.user)
            && !isNullOrUndefined(this.user.token)
            && this.user.token !== '';
    }

    public authorize(user: User): void {
        this.user = user;
    }
}

export { CurrentUserService };