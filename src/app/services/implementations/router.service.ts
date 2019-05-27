import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';

import { IRouterService } from 'services/IRouterService';

@Injectable()
class RouterService implements IRouterService {

    private previousRoute: string;

    private whenNavigationEnds$: Subject<NavigationEnd> =
        new ReplaySubject(1);

    constructor(
        private router: Router,
    ) {
        this.router
            .events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(event => event as NavigationEnd)
            )
            .subscribe(event => this.whenNavigationEnds$.next(event));

        this.whenNavigationEnds$
            .pipe(
                pairwise(),
                map(([{ urlAfterRedirects }]) => urlAfterRedirects)
            )
            .subscribe(route => this.previousRoute = route);
    }

    public whenRouteChange(): Observable<Array<string>> {
        return this.whenNavigationEnds$
            .pipe(
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
            .filter(routerPath => routerPath !== 'app')
            .reverse()
            .pop();
    }

    public getCurrentRoute(withoutArgs: boolean = false): string {
        const currentRoute: string =
            this.router.url.substring(1);

        if (!withoutArgs) {
            return currentRoute;
        } else {
            return currentRoute.split('?').reverse().pop();
        }
    }

    public getPreviousRoute(): string {
        return this.previousRoute;
    }

    public navigate(path: Array<string>, extras: any): void {
        this.router
            .navigate(path, extras)
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