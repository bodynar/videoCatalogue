import { Component, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';

import { IMenuItem } from 'src/app/models/menuItem';
import { siteMenu } from 'src/static/menu';
import { IRouterService } from 'src/app/services/contracts/IRouterService';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.template.pug',
    styleUrls: ['menu.style.styl']
})
class MenuComponent implements OnInit {
    public menuItems$: Subject<Array<IMenuItem>> =
        new ReplaySubject(1);

    private menuItems: Array<IMenuItem>;

    constructor(
        private routerService: IRouterService,
    ) {
        this.menuItems = siteMenu;
        this.menuItems$.next(this.menuItems);
    }

    public ngOnInit(): void {
        // todo add highliting current menu area
    }

    public onMenuItemClick(menuItem: IMenuItem): void {
        this.menuItems.forEach(item => item.isActive = false);
        menuItem.isActive = true;

        this.routerService.navigate([menuItem.link]);
    }
}

export { MenuComponent };