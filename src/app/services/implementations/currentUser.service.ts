import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { IAuthService } from 'services/IAuthService';
import { ICacheService } from 'services/ICacheService';
import { ICurrentUser } from 'services/ICurrentUser';

import { User } from 'models/user';

@Injectable()
class CurrentUserService implements ICurrentUser {
    public user: User;

    constructor(
        private authService: IAuthService,
        private cacheService: ICacheService,
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
        this.cacheService.set('user.auth token', token);
    }

    private getToken(): string {
        return this.cacheService.get('user.auth token');
    }
}

export { CurrentUserService };