import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IRouterService } from '../contracts/IRouterService';

@Injectable()
class RouterService implements IRouterService {

    constructor(
        private router: Router,
    ) {
    }

    public navigate(path: Array<string>): void {
        this.router
            .navigate(path)
            .then()
            .catch();
    }

    public navigateUp(): void {
        const routeParams: Array<string> =
            this.getRouteParams();

        const split: Array<string> =
            routeParams.slice(0, routeParams.length - 1);

        this.router
            .navigate(split)
            .then()
            .catch();
    }

    public navigateDeep(routeDefinition: string[], extras: any): void {
        const routeParams: Array<string> =
            this.getRouteParams();

        const mergedPath: Array<string> =
            Array.from(new Set([...routeParams, ...routeDefinition]));

        this.router
            .navigate(mergedPath, extras)
            .then().catch();
    }

    private getRouteParams(): Array<string> {
        return this.router.url
            .split('/')
            .filter(routerPart => routerPart !== '');
    }

}

export { RouterService };