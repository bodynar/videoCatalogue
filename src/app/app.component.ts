import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: 'app.template.pug',
  styleUrls: ['./app.style.styl']
})
class AppComponent {
  public title: string =
    'app';
}

export { AppComponent };