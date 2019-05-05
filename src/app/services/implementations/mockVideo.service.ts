import { Injectable } from '@angular/core';

import { IVideoService } from '../contracts/IVideoService';

import { Video } from 'src/app/models/video';
import { mockVideos } from 'src/static/videos';

@Injectable()
class MockVideoService implements IVideoService {
    constructor() { }

    public canEdit(_: number, __: number): boolean {
        return false;
    }

    public getVideo(videoId: string): Video {
        return mockVideos.filter(video => video.id === videoId).pop();
    }
}

export { MockVideoService };