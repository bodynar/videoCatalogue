import { Component } from '@angular/core';

import { IRouterService } from 'services/IRouterService';

import { Link } from 'models/link';

@Component({
    templateUrl: 'notFound.template.pug',
    styleUrls: ['notFound.style.styl']
})
class PageNotFoundComponent {

    public route: string;

    public links: Array<Link> =
        [
            {
                href: '',
                name: 'Main'
            },
            {
                href: 'app/videos',
                name: 'Videos'
            },
            {
                href: 'app/user',
                name: 'User'
            }
        ];

    constructor(
        private routerService: IRouterService
    ) {
        this.route = `/${this.routerService.getCurrentRoute(true)}`;
    }
}

export { PageNotFoundComponent };