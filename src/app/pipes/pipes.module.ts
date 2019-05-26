import { NgModule } from '@angular/core';

import { DateFormatPipe } from './dateFormat.pipe';

@NgModule({
    imports: [],
    exports: [DateFormatPipe],
    declarations: [DateFormatPipe],
    providers: [],
})
class PipesModule { }

export { PipesModule };