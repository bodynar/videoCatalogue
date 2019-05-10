import { Component, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';

import { MenuItem } from 'src/app/models/menuItem';
import { siteMenu } from 'src/static/menu';
import { IRouterService } from 'src/app/services/contracts/IRouterService';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.template.pug',
    styleUrls: ['menu.style.styl']
})
class MenuComponent implements OnInit {
    public menuItems$: Subject<Array<MenuItem>> =
        new ReplaySubject(1);

    private menuItems: Array<MenuItem>;

    constructor(
        private routerService: IRouterService,
    ) {
        this.menuItems = siteMenu;
        this.menuItems$.next(this.menuItems);
    }

    public ngOnInit(): void {
        this.routerService
            .whenRouteChange()
            .subscribe(([rootPath]) => this.highlightMenuItem(rootPath));

        const currentArea: string =
            this.routerService.getAreaName();

        this.highlightMenuItem(currentArea);
    }

    public onMenuItemClick(menuItem: MenuItem): void {
        this.menuItems.forEach(item => item.isActive = false);
        menuItem.isActive = true;

        this.routerService.navigate([menuItem.link]);
    }

    private highlightMenuItem(menuItemName: string): void {
        const menuItem: MenuItem =
            this.menuItems
                .filter(item => item.link === menuItemName)
                .pop();

        this.menuItems.forEach(item => item.isActive = false);
        menuItem.isActive = true;
    }
}

export { MenuComponent };