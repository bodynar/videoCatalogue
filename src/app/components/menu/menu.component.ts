import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.template.pug',
    styleUrls: ['menu.style.styl']
})

class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('menu initialized');
    }
}

export { MenuComponent };