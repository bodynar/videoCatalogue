import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ICurrentUser } from 'services/ICurrentUser';
import { IRouterService } from 'services/IRouterService';

@Injectable({ providedIn: 'root' })
class AuthGuard implements CanActivate {
    constructor(
        private currentUser: ICurrentUser,
        private routerService: IRouterService,
    ) { }

    public canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): Observable<boolean> {
        return this.currentUser
            .isAuthorized()
            .pipe(
                tap(isAuthorized => {
                    if (!isAuthorized) {
                        this.routerService.navigate(['login']);
                    }
                })
            );
    }
}

export { AuthGuard };