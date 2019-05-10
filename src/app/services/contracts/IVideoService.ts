import { Observable } from 'rxjs';

import { Video, VideoData } from 'models/video';

abstract class IVideoService {
    /**
     * Get videos
     */
    abstract getVideos(): Observable<Array<Video>>;

    /**
     * Get video information
     * @param videoId Videoidentifier
     */
    abstract getVideo(videoId: string): VideoData;
}

export { IVideoService };