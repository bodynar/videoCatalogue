import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Video } from 'src/app/models/video';
import { IVideoService } from 'src/app/services/contracts/IVideoService';

@Component({
    selector: 'app-video-item',
    templateUrl: 'video-item.template.pug',
    styleUrls: ['video-item.style.styl']
})
class VideoItemComponent implements OnInit {
    @Input('video')
    public videoItem: Video;

    constructor(
        private router: Router,
        private videoServie: IVideoService,
        private route: ActivatedRoute
    ) {
    }

    public ngOnInit(): void {
    }

    public onVideoClick(): void {
        this.router.navigate(['view'], {
            queryParams: {
                'videoId': this.videoItem.id
            },
            relativeTo: this.route
        });
    }
}

export { VideoItemComponent };