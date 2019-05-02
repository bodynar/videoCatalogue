import { Component, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';

import { IMenuItem } from 'src/app/models/menuItem';
import { siteMenu } from 'src/static/menu';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.template.pug',
    styleUrls: ['menu.style.styl']
})

class MenuComponent implements OnInit {

    public menuItems$: Subject<Array<IMenuItem>> =
        new ReplaySubject(1);

    constructor() {
        this.menuItems$.next(siteMenu);
    }

    public ngOnInit(): void {
        console.log('menu initialized');
    }

    public onMenuItemClick(menuItem: IMenuItem): void {
        alert(`you clicked on ${menuItem.name}`);
    }
}

export { MenuComponent };