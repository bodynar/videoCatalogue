import { NgModule } from '@angular/core';

import { IVideoService } from './contracts/IVideoService';
import { MockVideoService } from './implementations/mockVideo.service';
import { IUserService } from './contracts/IUserService';
import { MockUserService } from './implementations/mockUser.service';

@NgModule({
    imports: [],
    exports: [],
    providers: [
        { provide: IVideoService, useClass: MockVideoService },
        { provide: IUserService, useClass: MockUserService }
    ],
})
class AppServicesModule { }

export { AppServicesModule };