import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppContainerComponent } from './component/appContainer.component';

import { MenuComponent } from './components/menu/menu.component';

import { AppServicesModule } from './services/services.module';

import { EmployeesModule } from './areas/employees/employees.module';
import { VideosModule } from './areas/videos/videos.module';
import { UserModule } from './areas/user/user.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppContainerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppServicesModule,
    VideosModule,
    EmployeesModule,
    UserModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppContainerComponent]
})
class AppModule { }

export { AppModule };