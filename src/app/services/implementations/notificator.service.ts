import { Injectable } from '@angular/core';

import { INotificator } from 'services/INotificator';

@Injectable()
class NotificatorService implements INotificator {
    public notify(message: string): void {
        // alert(message);
    }

    public error(message: string): void {
        console.error(message);
    }

    public success(message: string): void {
        console.log(message);
    }

    public warning(message: string): void {
        console.warn(message);
    }

    constructor() { }
}

export { NotificatorService };