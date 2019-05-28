import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Video } from 'models/video';
import { IVideoService } from 'services/IVideoService';

@Component({
    templateUrl: 'video-list.template.pug',
    styleUrls: ['video-list.style.styl']
})
class VideoListComponent implements OnInit, OnDestroy {

    public videos$: Subject<Array<Video>> =
        new ReplaySubject(1);

    public isListDisplayType$: Subject<boolean> =
        new ReplaySubject(1);

    // todo: change types
    public whenTypeChange$: Subject<'list' | 'cards'> =
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

        this.whenTypeChange$
            .pipe(
                takeUntil(this.whenComponentDestroy$),
                map(type => type === 'list')
            )
            .subscribe(isList => this.isListDisplayType$.next(isList));
    }

    public ngOnInit(): void {
        this.whenTypeChange$.next('cards');
        // todo: replace then from cache or user settings
    }

    public ngOnDestroy(): void {
        this.whenComponentDestroy$.next(null);
        this.whenComponentDestroy$.complete();
    }
}

export { VideoListComponent };