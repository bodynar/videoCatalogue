import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Apply custom format to Date
 * Takes first argument as format string
 * @example {{ dateValue | dateFormat: 'HH:mm:ss' }}
 */
@Pipe({ name: 'dateFormat' })
class DateFormatPipe extends DatePipe implements PipeTransform {
    public transform(value: Date, ...args: any[]): string {
        const format: string =
            args.pop();

        return super.transform(value, format);
    }
}

export { DateFormatPipe };