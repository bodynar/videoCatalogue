import { NgModule } from '@angular/core';

import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideosComponent } from './component/videos.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [VideosComponent, VideoItemComponent],
    providers: [],
})
class VideosModule { }

export { VideosModule };