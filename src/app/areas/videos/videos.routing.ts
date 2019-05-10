import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideosComponent } from './component/videos.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoViewComponent } from './components/video-view/video-view.component';

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
    providers: [],
})
class VideosRoutingModule { }

export {
    VideosRoutingModule,
    routes,
};