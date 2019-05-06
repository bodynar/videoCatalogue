import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject, Subject } from 'rxjs';

import { IMenuItem } from 'src/app/models/menuItem';
import { siteMenu } from 'src/static/menu';
import { ICurrentUser } from 'src/app/services/contracts/ICurrentUser';

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
        private router: Router,
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

        this.router.navigate([menuItem.link])
            .then().catch();
    }
}

export { MenuComponent };