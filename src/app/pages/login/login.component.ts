import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { of, ReplaySubject, Subject } from 'rxjs';
import { catchError, filter, mapTo, switchMap, tap } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { IAuthService } from 'services/IAuthService';
import { ICurrentUser } from 'services/ICurrentUser';
import { INotificator } from 'services/INotificator';
import { IRouterService } from 'services/IRouterService';

@Component({
    templateUrl: 'login.template.pug',
    styleUrls: ['login.style.styl']
})
class LoginComponent {

    private whenFormSubmitted$: Subject<{ login: string, password: string }> =
        new ReplaySubject(1);

    constructor(
        private authService: IAuthService,
        private notificator: INotificator,
        private currentUser: ICurrentUser,
        private routerService: IRouterService,
    ) {
        this.whenFormSubmitted$
            .pipe(
                switchMap(({ login, password }) => this.authService.authorize(login, password)),
                filter(response => {
                    const isValid: boolean =
                        !isNullOrUndefined(response) && response !== 'error';

                    if (!isValid) {
                        this.notificator.error('error');
                    }

                    return isValid;
                }),
                tap(token => this.currentUser.authorize(token)),
                mapTo(true),
                catchError(error => {
                    this.notificator.error(error);

                    return of(false);
                }),
                filter(isSuccess => isSuccess)
            )
            .subscribe(_ => this.routerService.navigate(['app']));
    }

    public authenticate({ form }: NgForm): void {
        if (form.valid) {
            this.whenFormSubmitted$.next({
                login: form.value['login'],
                password: form.value['password']
            });
        }
    }
}

export { LoginComponent };