import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ReplaySubject, Subject } from 'rxjs';

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
                map(params => ({
                    id: params['videoId']
                })),
                filter(({ id }) => !isNullOrUndefined(id)),
                map(({ id }) => id)
            )
            .subscribe(id => this.whenRecieveVideoParams$.next(id));

        this.whenRecieveVideoParams$
            .pipe(
                map(id => this.videoService.getVideo(id))
            )
            .subscribe(({ name, preview }) => {
                this.videoName$.next(name);
                this.videoPreview$.next(preview);
            });
    }

    public ngOnDestroy(): void {

    }

    public onBtnClick(): void {
        this.routerService.navigateUp();
    }
}

export { VideoViewComponent };