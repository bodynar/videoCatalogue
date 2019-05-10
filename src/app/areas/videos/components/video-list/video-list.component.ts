import { Component } from '@angular/core';

import { ReplaySubject, Subject } from 'rxjs';

import { Video } from 'src/app/models/video';
import { IVideoService } from 'src/app/services/contracts/IVideoService';

@Component({
    templateUrl: 'video-list.template.pug',
    styleUrls: ['video-list.style.styl']
})
class VideoListComponent {

    public videos$: Subject<Array<Video>> =
        new ReplaySubject(1);

    constructor(
        private videoService: IVideoService
    ) {
        this.videoService
            .getVideos()
            .subscribe(videos => this.videos$.next(videos));
    }
}

export { VideoListComponent };