import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ICurrentUser } from 'services/ICurrentUser';
import { IRouterService } from 'services/IRouterService';

@Injectable({ providedIn: 'root' })
class AuthGuard implements CanActivate {
    constructor(
        private currentUser: ICurrentUser,
        private routerService: IRouterService,
    ) { }

    public canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean {
        const isAuthorized: boolean =
            this.currentUser.isAuthorized();

        if (!isAuthorized) {
            this.routerService.navigate(['login']);
        }

        return true;
    }
}

export { AuthGuard };