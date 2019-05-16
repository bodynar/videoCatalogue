import { Injectable } from '@angular/core';

import { IUserService } from 'services/IUserService';

import { mockUsers } from 'src/static/users';

import { ActionResult } from 'models/common/actionResult';
import { User } from 'models/user';

@Injectable()
class MockUserService implements IUserService {

    constructor(
    ) {
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