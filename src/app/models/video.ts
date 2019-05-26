import { VideoCategory } from './videoCategory';

interface Video {
    id: string;
    name: string;
    preview: string;
    description?: string;
    duration?: Date;
    views?: number;
    categories?: Array<VideoCategory>;
    likes?: number;
}

interface VideoData extends Video {
    link: string;
}

export {
    Video,
    VideoData
};