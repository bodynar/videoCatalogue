import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { ICurrentUser } from 'services/ICurrentUser';

@Injectable({ providedIn: 'root' })
class AuthGuard implements CanActivate {
    constructor(
        private currentUser: ICurrentUser,
        private router: Router,
    ) { }

    public canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean {
        const isAuthorized: boolean =
            this.currentUser.isAuthorized();

        if (!isAuthorized) {
            this.router.navigate(['login']);
        }

        return true;
    }
}

export { AuthGuard };