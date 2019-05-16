import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { AuthorizeResponse } from 'models/backend/auth/authorizeResponse';

import { IAuthSource } from 'services/backend/IAuthSource';

@Injectable()
class AuthSourceService implements IAuthSource {
    private authPostfix: string =
        'api/auth';

    constructor(
        private http: HttpClient
    ) { }

    public isTokenStillValid(token: string): Observable<boolean> {
        const requestParams: { token: string } = {
            'token': token
        };

        return this.http
            .post<boolean>(`${this.authPostfix}/isTokenValid`, requestParams)
            .pipe(
                map(response => response['isValid'] as boolean)
            );
    }

    public authorize(login: string, passwordHash: string): Observable<string> {
        const requestParams: { login: string, passwordHash: string } = {
            login, passwordHash
        };

        return this.http
            .post<AuthorizeResponse>(`${this.authPostfix}/authorize`, requestParams)
            .pipe(
                map(response => ({
                    token: response['token']
                })),
                map(({ token }) => token)
            );
    }
}

export { AuthSourceService };