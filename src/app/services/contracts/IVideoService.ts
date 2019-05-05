import { Video } from 'src/app/models/video';

abstract class IVideoService {
    abstract canEdit(videoId: number, userId: number): boolean;
    abstract getVideo(videoId: string): Video;
}

export { IVideoService };