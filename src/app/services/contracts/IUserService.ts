import { ActionResult } from 'models/common/actionResult';

abstract class IUserService {
    /**
     * Try to authorize user with passed data
     * If succeded will update ICurrentUser instance
     * @param login user login
     * @param passwordHash password hash
     */
    abstract authorize(login: string, passwordHash: string): void;

    /** ? */
    abstract register(login: string, passwordHash: string): ActionResult<boolean>;
}

export { IUserService };