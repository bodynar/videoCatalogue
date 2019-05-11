import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { IRouterService } from 'services/IRouterService';

import { MenuItem } from 'models/menuItem';
import { siteMenu } from 'src/static/menu';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.template.pug',
    styleUrls: ['menu.style.styl']
})
class MenuComponent implements OnInit, OnDestroy {
    public menuItems$: Subject<Array<MenuItem>> =
        new ReplaySubject(1);


    private whenComponentDestroy$: Subject<null> =
        new Subject();

    private menuItems: Array<MenuItem>;

    constructor(
        private routerService: IRouterService,
    ) {
        this.menuItems = siteMenu.sort((leftItem, rightItem) => {
            const leftPosition: number =
                isNullOrUndefined(leftItem.position)
                    ? 0
                    : leftItem.position;

            return leftPosition - rightItem.position;
        });
        this.menuItems$.next(this.menuItems);
    }

    public ngOnInit(): void {
        this.routerService
            .whenRouteChange()
            .pipe(
                takeUntil(this.whenComponentDestroy$)
            )
            .subscribe(([rootPath]) => this.highlightMenuItem(rootPath));

        const currentArea: string =
            this.routerService.getAreaName();

        this.highlightMenuItem(currentArea);
    }

    public ngOnDestroy(): void {
        this.whenComponentDestroy$.next(null);
        this.whenComponentDestroy$.complete();
    }

    public onMenuItemClick(menuItem: MenuItem): void {
        const currentRoute: string =
            this.routerService.getCurrentRoute();

        if (currentRoute === menuItem.link) {
            return;
        }

        this.menuItems.forEach(item => item.isActive = false);
        menuItem.isActive = true;

        this.routerService.navigate([menuItem.link]);
    }

    private highlightMenuItem(menuItemName: string): void {
        const menuItem: MenuItem =
            this.menuItems
                .filter(item => item.link === menuItemName)
                .pop();

        if (!isNullOrUndefined(menuItem)) {
            this.menuItems.forEach(item => item.isActive = false);
            menuItem.isActive = true;
        }
    }
}

export { MenuComponent };