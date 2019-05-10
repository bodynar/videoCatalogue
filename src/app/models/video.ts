import { VideoCategory } from './videoCategory';

interface Video {
    id: string;
    name: string;
    preview: string;
    duration?: Date;
    views?: number;
    categories?: Array<VideoCategory>;
}

interface VideoData extends Video {
    link: string;
}

export {
    Video,
    VideoData
};