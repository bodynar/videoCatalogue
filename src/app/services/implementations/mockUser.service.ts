import { Injectable } from '@angular/core';

import { isNullOrUndefined } from 'util';

import { IUserService } from '../contracts/IUserService';
import { ICurrentUser } from '../contracts/ICurrentUser';

import { mockUsers } from 'src/static/users';
import { ActionResult } from 'src/app/models/common/actionResult';
import { User } from 'src/app/models/user';

@Injectable()
class MockUserService implements IUserService {

    constructor(
        private currentUser: ICurrentUser
    ) {
    }

    public authorize(login: string, passwordHash: string): void {
        const specificUser: User =
            mockUsers.find(user => user.login === login);

        if (isNullOrUndefined(specificUser)) {
            throw new Error('User with specified login is not found');
        }

        if (specificUser.passwordHash !== passwordHash) {
            throw new Error('Password is not correct');
        }

        specificUser.token = 'token';

        this.currentUser.authorize(specificUser);
    }

    public register(login: string, passwordHash: string): ActionResult<boolean> {
        const isLoginTaken: boolean =
            !mockUsers.some(user => user.login === login);

        if (!isLoginTaken) {
            return ActionResult.Fail<boolean>('Login is already taken');
        }

        const serverResponse: { Message: string, Success: boolean } =
            { Message: '', Success: false };

        if (!serverResponse.Success) {
            return ActionResult.Fail<boolean>(serverResponse.Message);
        }

        try {
            const newUser: User =
            {
                id: `000${mockUsers.length + 1}`,
                login: login,
                passwordHash: passwordHash
            };

            mockUsers.push(newUser);

            return ActionResult.Success(true);

        } catch (error) {
            return ActionResult.Fail<boolean>(error);
        }
    }
}

export { MockUserService };