import { User } from 'src/app/models/user';

abstract class ICurrentUser {
    abstract user: User;

    abstract isAuthorized(): boolean;
    abstract authorize(user: User): void;
}

export { ICurrentUser };