import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IVideoService } from 'services/IVideoService';

import { Video, VideoData } from 'models/video';
import { mockVideos } from 'src/static/videos';

@Injectable()
class MockVideoService implements IVideoService {

    public getVideos(): Observable<Array<Video>> {
        return of(mockVideos.map(video => ({
            id: video.id,
            name: video.name,
            preview: video.preview
        })));
    }

    public getVideo(videoId: string): VideoData {
        return mockVideos.filter(video => video.id === videoId).pop();
    }
}

export { MockVideoService };