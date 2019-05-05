import { Component, Input, OnInit } from '@angular/core';

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
        // private videoServie: IVideoService
    ) {
    }

    public ngOnInit(): void {
    }
}

export { VideoItemComponent };