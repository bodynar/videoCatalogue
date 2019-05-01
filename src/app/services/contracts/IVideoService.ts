abstract class IVideoService {
    abstract canEdit(videoId: number, userId: number): boolean;
}

export { IVideoService };