import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { VideosComponent } from './component/videos.component';

const routes: Routes = [
    {
        path: 'videos',
        component: VideosComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: VideoListComponent
            },
            {
                path: 'view',
                pathMatch: 'full',
                component: VideoViewComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
class VideosRoutingModule { }

export { VideosRoutingModule };