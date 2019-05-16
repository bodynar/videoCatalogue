import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IAuthSource } from 'services/backend/IAuthSource';
import { IAuthService } from 'services/IAuthService';

@Injectable()
class AuthService implements IAuthService {
    constructor(
        private authSource: IAuthSource,
        // private loggingService: ILoggingService,
    ) {
    }

    public isTokenStillValid(token: string): Observable<boolean> {
        return this.authSource
            .isTokenStillValid(token)
            .pipe(
                tap(isValid => {
                    if (!isValid) {
                        this.removeToken();
                    }
                }),
                catchError(error => {
                    // this.loggingService.error(error);
                    return of(null);
                })
            );
    }

    public authorize(login: string, passwordHash: string): Observable<string> {
        return this.authSource
            .authorize(login, passwordHash)
            .pipe(
                catchError(error => {
                    // this.loggingService.error(error);
                    return of('error');
                }));
    }

    private removeToken(): void {
        localStorage.removeItem('user-auth-token');
    }
}

export { AuthService };