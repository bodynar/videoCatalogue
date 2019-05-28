import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';
import { map, switchMapTo, takeUntil, tap } from 'rxjs/operators';

import { Video } from 'models/video';

import { ICacheService } from 'services/ICacheService';
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

    public whenTypeChange$: Subject<string> =
        new ReplaySubject(1);


    private whenComponentDestroy$: Subject<null> =
        new Subject();

    constructor(
        private videoService: IVideoService,
        private cacheService: ICacheService,
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

        this.whenComponentDestroy$
            .pipe(switchMapTo(this.whenTypeChange$))
            .subscribe(type => this.cacheService.set('videos.list display type', type));
    }

    public ngOnInit(): void {
        const selectedDisplayType: string =
            this.cacheService.get('videos.list display type', 'cards');

        this.whenTypeChange$.next(selectedDisplayType);
    }

    public ngOnDestroy(): void {
        this.whenComponentDestroy$.next(null);
        this.whenComponentDestroy$.complete();
    }
}

export { VideoListComponent };