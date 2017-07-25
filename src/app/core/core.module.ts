import { NgModule } from '@angular/core';
import { ErrorHandlerService } from './error-handler-service';
import { SignupService } from './signup-service';
import { DOMEvents } from './DOMEvents';

@NgModule({
    imports: [

    ],
    declarations: [

    ],
    providers: [
        ErrorHandlerService,
        SignupService,
        DOMEvents
    ]
})
export class CoreModule { }
