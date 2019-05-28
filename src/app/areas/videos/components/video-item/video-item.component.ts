import { Component, Input, OnDestroy } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Video } from 'models/video';
import { IRouterService } from 'services/IRouterService';
import { IVideoService } from 'services/IVideoService';

@Component({
    selector: 'app-video-item',
    templateUrl: 'video-item.template.pug',
    styleUrls: ['video-item.style.styl']
})
class VideoItemComponent implements OnDestroy {
    @Input('video')
    public videoItem: Video;

    @Input('dispayTypeChange')
    public whenTypeChange$: Subject<'list' | 'cards'> =
        new ReplaySubject(1);

    public isListDisplayType$: Subject<boolean> =
        new ReplaySubject(1);


    private whenComponentDestroy$: Subject<null> =
        new Subject();

    constructor(
        private routerService: IRouterService,
        private videoServie: IVideoService,
    ) {
        this.whenTypeChange$
            .pipe(
                takeUntil(this.whenComponentDestroy$),
                map(type => type === 'list')
            )
            .subscribe(isList => this.isListDisplayType$.next(isList));
    }

    public ngOnDestroy(): void {
        this.whenComponentDestroy$.next(null);
        this.whenComponentDestroy$.complete();
    }

    public onVideoClick(): void {
        this.routerService.navigateDeep(['view'], {
            queryParams: { 'videoId': this.videoItem.id }
        });
    }
}

export { VideoItemComponent };