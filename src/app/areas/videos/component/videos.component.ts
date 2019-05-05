import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject, Subject } from 'rxjs';

@Component({
    templateUrl: 'videos.template.pug',
    styleUrls: ['videos.styles.styl']
})
class VideosComponent implements OnInit {
    public links$: Subject<Array<string>> =
        new ReplaySubject(1);

    constructor(
        private router: Router
    ) {
        this.links$.next([
            'list',
            'view'
        ]);
    }

    public ngOnInit(): void { }

    public click(link: string): void {
        this.router.navigate(['videos', link]);
    }
}

export { VideosComponent };