import { NgModule } from '@angular/core';

import { IVideoService } from './contracts/IVideoService';
import { MockVideoService } from './implementations/mockVideo.service';
import { IUserService } from './contracts/IUserService';
import { MockUserService } from './implementations/mockUser.service';
import { CurrentUserService } from './implementations/currentUser.service';
import { ICurrentUser } from './contracts/ICurrentUser';

@NgModule({
    imports: [],
    exports: [],
    providers: [
        { provide: IVideoService, useClass: MockVideoService },
        { provide: IUserService, useClass: MockUserService },
        { provide: ICurrentUser, useClass: CurrentUserService }
    ],
})
class AppServicesModule { }

export { AppServicesModule };