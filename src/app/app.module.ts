import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { PagesModule } from './pages/pages.module';
import { AppServicesModule } from './services/services.module';

import { WelcomeComponent } from 'components/welcome/welcome.component';
import { AppContainerComponent } from './components/appContainer/appContainer.component';
import { MenuComponent } from './components/menu/menu.component';

import { EmployeesModule } from './areas/employees/employees.module';
import { UserModule } from './areas/user/user.module';
import { VideosModule } from './areas/videos/videos.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AppContainerComponent,
    WelcomeComponent,
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
  bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule };