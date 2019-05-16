import { Observable } from 'rxjs';

import { User } from 'models/user';

abstract class ICurrentUser {
    abstract user: User;

    abstract isAuthorized(): Observable<boolean>;
    abstract authorize(token: string): void;
}

export { ICurrentUser };