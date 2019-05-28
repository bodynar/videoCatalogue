import { Injectable } from '@angular/core';

import { isNullOrUndefined } from 'util';

import { ICacheService } from 'services/ICacheService';

@Injectable()
class CacheService implements ICacheService {

    constructor(
    ) {
    }

    public get(key: string, defaultValue?: any) {
        const rawValue: string =
            localStorage.getItem(key);

        let parsedValue: any =
            JSON.parse(rawValue);

        if (isNullOrUndefined(parsedValue) && !isNullOrUndefined(defaultValue)) {
            parsedValue = defaultValue;

            this.set(key, defaultValue);
        }

        return parsedValue;
    }

    public set(key: string, value: any): void {
        const rawValue: string =
            JSON.stringify(value);

        localStorage.setItem(key, rawValue);
    }
}

export { CacheService };