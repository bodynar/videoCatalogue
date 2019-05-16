import { ActionResult } from 'models/common/actionResult';

abstract class IUserService {
    /** ? */
    abstract register(login: string, passwordHash: string): ActionResult<boolean>;
}

export { IUserService };