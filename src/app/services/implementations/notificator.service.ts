import { Injectable } from '@angular/core';

import { INotificator } from 'services/INotificator';

@Injectable()
class NotificatorService implements INotificator {
    public notify(message: string): void {
        // alert(message);
    }

    public error(message: string): void {
        // alert(message);
    }

    public success(message: string): void {
        // alert(message);
    }

    public warning(message: string): void {
        // alert(message);
    }

    constructor() { }
}

export { NotificatorService };