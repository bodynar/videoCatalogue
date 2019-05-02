import { NgModule } from '@angular/core';

import { VideoComponent } from './video.component';
import { VideoItemComponent } from './video-item/video-item.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        VideoComponent, VideoItemComponent
    ],
    providers: [],
})
class VideoModule { }

export { VideoModule };