import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ICurrentUser } from 'services/ICurrentUser';
import { IRouterService } from 'services/IRouterService';

@Injectable({ providedIn: 'root' })
 class LoginGuard implements CanActivate {
    constructor(
        private currentUser: ICurrentUser,
        private routerService: IRouterService,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuthorized: boolean =
            this.currentUser.isAuthorized();

        if (isAuthorized) {
            this.routerService.navigate(['']);
        }

        return true;
    }
}

export { LoginGuard };