import { Component, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';

import { Video } from 'src/app/models/video';
import { mockVideos } from 'src/static/videos';

@Component({
    templateUrl: 'video-list.template.pug',
    styleUrls: ['video-list.style.styl']
})
class VideoListComponent implements OnInit {

    public videos$: Subject<Array<Video>> =
        new ReplaySubject(1);

    constructor(
    ) {
        this.videos$.next(mockVideos);
    }

    public ngOnInit(): void { }
}

export { VideoListComponent };