import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos.routing';
import { VideosComponent } from './component/videos.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { VideoFiltersComponent } from './components/video-filters/video-filters.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        VideosRoutingModule
    ],
    exports: [],
    declarations: [
        VideosComponent, VideoItemComponent, VideoListComponent,
        VideoViewComponent, VideoFiltersComponent
    ],
    providers: [],
})
class VideosModule { }

export { VideosModule };