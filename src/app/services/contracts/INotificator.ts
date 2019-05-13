abstract class INotificator {
    abstract notify(message: string): void;

    abstract error(message: string): void;

    abstract success(message: string): void;

    abstract warning(message: string): void;
}

export { INotificator };