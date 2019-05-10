import { Component, OnDestroy } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Video } from 'models/video';
import { IVideoService } from 'services/IVideoService';

@Component({
    templateUrl: 'video-list.template.pug',
    styleUrls: ['video-list.style.styl']
})
class VideoListComponent implements OnDestroy {

    public videos$: Subject<Array<Video>> =
        new ReplaySubject(1);


    private whenComponentDestroy$: Subject<null> =
        new Subject();

    constructor(
        private videoService: IVideoService
    ) {
        this.videoService
            .getVideos()
            .pipe(takeUntil(this.whenComponentDestroy$))
            .subscribe(videos => this.videos$.next(videos));
    }

    public ngOnDestroy(): void {
        this.whenComponentDestroy$.next(null);
        this.whenComponentDestroy$.complete();
    }
}

export { VideoListComponent };