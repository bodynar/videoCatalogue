import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { isNullOrUndefined } from 'util';

import { IAuthService } from 'services/IAuthService';
import { ICurrentUser } from 'services/ICurrentUser';

import { User } from 'models/user';
import { map } from 'rxjs/operators';

@Injectable()
class CurrentUserService implements ICurrentUser {
    public user: User;

    constructor(
        private authService: IAuthService,
    ) {
    }

    public isAuthorized(): Observable<boolean> {
        const token: string =
            this.getToken();

        if (isNullOrUndefined(token)) {
            return of(false);
        }

        return this.authService
            .isTokenStillValid(token)
            .pipe(
                map(isValid => isValid
                    && !isNullOrUndefined(this.user)
                )
            );
    }

    public authorize(token: string): void {
        localStorage.setItem('user-auth-token', token);
    }

    private getToken(): string {
        return localStorage.getItem('user-auth-token');
    }
}

export { CurrentUserService };