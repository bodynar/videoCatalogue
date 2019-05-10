import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, filter, takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';

import { isNullOrUndefined } from 'util';

import { IVideoService } from 'src/app/services/contracts/IVideoService';
import { IRouterService } from 'src/app/services/contracts/IRouterService';

@Component({
    templateUrl: 'video-view.template.pug',
    styleUrls: ['video-view.template.pug']
})
class VideoViewComponent implements OnDestroy {
    public videoName$: Subject<string> =
        new ReplaySubject(1);

    public videoPreview$: Subject<string> =
        new ReplaySubject(1);


    private whenComponentDestroy$: Subject<null> =
        new Subject();

    private whenRecieveVideoParams$: Subject<string> =
        new ReplaySubject(1);

    constructor(
        private routerService: IRouterService,
        private activatedRoute: ActivatedRoute,
        private videoService: IVideoService
    ) {
        this.activatedRoute
            .queryParams
            .pipe(
                takeUntil(this.whenComponentDestroy$),
                map(params => ({
                    id: params['videoId']
                })),
                filter(({ id }) => !isNullOrUndefined(id)),
                map(({ id }) => id)
            )
            .subscribe(id => this.whenRecieveVideoParams$.next(id));

        this.whenRecieveVideoParams$
            .pipe(
                takeUntil(this.whenComponentDestroy$),
                map(id => this.videoService.getVideo(id))
            )
            .subscribe(({ name, preview }) => {
                this.videoName$.next(name);
                this.videoPreview$.next(preview);
            });
    }

    public ngOnDestroy(): void {
        this.whenComponentDestroy$.next(null);
        this.whenComponentDestroy$.complete();
    }

    public onBtnClick(): void {
        this.routerService.navigateUp();
    }

    public onClick(): void {
        this.routerService.navigate(['employees']);
    }
}

export { VideoViewComponent };