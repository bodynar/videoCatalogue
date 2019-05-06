import { ActionResult } from 'src/app/models/common/actionResult';

abstract class IUserService {
    abstract authorize(login: string, passwordHash: string): string;

    /** ? */
    abstract register(login: string, passwordHash: string): ActionResult<boolean>;
}

export { IUserService };