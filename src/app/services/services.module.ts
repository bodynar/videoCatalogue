import { NgModule } from '@angular/core';

import { IVideoService } from './contracts/IVideoService';
import { IUserService } from './contracts/IUserService';
import { ICurrentUser } from './contracts/ICurrentUser';
import { IRouterService } from './contracts/IRouterService';

import { MockVideoService } from './implementations/mockVideo.service';
import { MockUserService } from './implementations/mockUser.service';
import { CurrentUserService } from './implementations/currentUser.service';
import { RouterService } from './implementations/router.service';

@NgModule({
    imports: [],
    exports: [],
    providers: [
        { provide: IVideoService, useClass: MockVideoService },
        { provide: IUserService, useClass: MockUserService },
        { provide: ICurrentUser, useClass: CurrentUserService },
        { provide: IRouterService, useClass: RouterService }
    ],
})
class AppServicesModule { }

export { AppServicesModule };