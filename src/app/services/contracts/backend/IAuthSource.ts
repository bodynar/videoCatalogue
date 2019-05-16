import { Observable } from 'rxjs';

abstract class IAuthSource {

    abstract isTokenStillValid(token: string): Observable<boolean>;

    abstract authorize(login: string, passwordHash: string): Observable<string>;
}

export { IAuthSource };