import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IAuthSource } from 'services/backend/IAuthSource';
import { IAuthService } from 'services/IAuthService';
import { ICacheService } from 'services/ICacheService';
import { ICurrentUser } from 'services/ICurrentUser';
import { INotificator } from 'services/INotificator';
import { IRouterService } from 'services/IRouterService';
import { IUserService } from 'services/IUserService';
import { IVideoService } from 'services/IVideoService';

import { AuthService } from './implementations/auth.service';
import { AuthSourceService } from './implementations/backend/authSource.service';
import { CacheService } from './implementations/cache.service';
import { CurrentUserService } from './implementations/currentUser.service';
import { MockUserService } from './implementations/mockUser.service';
import { MockVideoService } from './implementations/mockVideo.service';
import { NotificatorService } from './implementations/notificator.service';
import { RouterService } from './implementations/router.service';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    providers: [
        { provide: IVideoService, useClass: MockVideoService },
        { provide: IUserService, useClass: MockUserService },
        { provide: ICurrentUser, useClass: CurrentUserService },
        { provide: IRouterService, useClass: RouterService },
        { provide: INotificator, useClass: NotificatorService },
        { provide: IAuthService, useClass: AuthService },
        { provide: IAuthSource, useClass: AuthSourceService },
        { provide: ICacheService, useClass: CacheService }
    ],
})
class AppServicesModule { }

export { AppServicesModule };