import { Component } from '@angular/core';

import { ICurrentUser } from 'services/ICurrentUser';

@Component({
    templateUrl: 'welcome.template.pug'
})
class WelcomeComponent {
    constructor(
        public user: ICurrentUser
    ) { }
}

export { WelcomeComponent };