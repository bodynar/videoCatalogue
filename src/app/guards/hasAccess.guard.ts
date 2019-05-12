import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { ICurrentUser } from 'services/ICurrentUser';

@Injectable({ providedIn: 'root' })
class HasAccessGuard implements CanActivate {
    constructor(
        private currentUser: ICurrentUser,
        private router: Router,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const hasAccess: boolean =
            false;

        if (!hasAccess) {
            this.router.navigate(['forbidden']);
        }

        return true;
    }
}

export { HasAccessGuard };