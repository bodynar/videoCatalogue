import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'videos.template.pug',
    styleUrls: ['videos.styles.styl']
})
class VideosComponent implements OnInit {
    constructor(
        private router: Router
    ) {
    }

    public ngOnInit(): void { }
}

export { VideosComponent };