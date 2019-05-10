import { NgModule } from '@angular/core';

import { ICurrentUser } from 'services/ICurrentUser';
import { IRouterService } from 'services/IRouterService';
import { IUserService } from 'services/IUserService';
import { IVideoService } from 'services/IVideoService';

import { CurrentUserService } from './implementations/currentUser.service';
import { MockUserService } from './implementations/mockUser.service';
import { MockVideoService } from './implementations/mockVideo.service';
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