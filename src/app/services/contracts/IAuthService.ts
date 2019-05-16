import { Observable } from 'rxjs';

abstract class IAuthService {
    /**
     * Determines if user token is still active
     * @param token User auth token
     */
    abstract isTokenStillValid(token: string): Observable<boolean>;

    /**
     * Try to authorize user with passed data
     * @param login User login
     * @param passwordHash Password hash
     * @returns {Observable<string>} Access token for user
     */
    abstract authorize(login: string, passwordHash: string): Observable<string>;
}

export { IAuthService };