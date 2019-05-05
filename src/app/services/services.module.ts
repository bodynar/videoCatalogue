import { NgModule } from '@angular/core';

import { IVideoService } from './contracts/IVideoService';
import { MockVideoService } from './implementations/mockVideo.service';

@NgModule({
    imports: [],
    exports: [],
    providers: [
        { provide: IVideoService, useClass: MockVideoService }
    ],
})
class AppServicesModule { }

export { AppServicesModule };