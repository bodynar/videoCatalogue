import { Component, Input, OnInit } from '@angular/core';

import { Video } from 'src/app/models/video';
import { IVideoService } from 'src/app/services/contracts/IVideoService';
import { IRouterService } from 'src/app/services/contracts/IRouterService';

@Component({
    selector: 'app-video-item',
    templateUrl: 'video-item.template.pug',
    styleUrls: ['video-item.style.styl']
})
class VideoItemComponent implements OnInit {
    @Input('video')
    public videoItem: Video;

    constructor(
        private routerService: IRouterService,
        private videoServie: IVideoService,
    ) {
    }

    public ngOnInit(): void {
    }

    public onVideoClick(): void {
        this.routerService.navigateDeep(['view'], {
            queryParams: { 'videoId': this.videoItem.id }
        });
    }
}

export { VideoItemComponent };