import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class ErrorHandlerService {
public handleHttpError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
