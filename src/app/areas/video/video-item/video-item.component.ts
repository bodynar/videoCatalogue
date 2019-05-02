import { Component } from '@angular/core';

import { Video } from 'src/app/models/video';
import { IVideoService } from 'src/app/services/contracts/IVideoService';

@Component({
    selector: 'app-video-item',
    templateUrl: 'video-item.template.pug',
    styleUrls: ['video-item.style.styl']
})
class VideoItemComponent {
    constructor(
        // public videoItem: Video,
        // private videoServie: IVideoService
    ) {
    }
}

export { VideoItemComponent };