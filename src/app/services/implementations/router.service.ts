import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { IRouterService } from '../contracts/IRouterService';

@Injectable()
class RouterService implements IRouterService {

    constructor(
        private router: Router,
    ) {
    }

    public whenRouteChange(): Observable<Array<string>> {
        return this.router
            .events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(event => event as NavigationEnd),
                map(({ urlAfterRedirects }) =>
                    urlAfterRedirects
                        .split('/')
                        .filter(routerPath => routerPath !== '')
                )
            );
    }

    public getAreaName(): string {
        return this.router.url
            .split('/')
            .filter(routerPart => routerPart !== '')
            .reverse()
            .pop();
    }

    public getCurrentPath(): string {
        return this.router.url.substring(1);
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