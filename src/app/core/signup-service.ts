import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorHandlerService } from './error-handler-service';
import { environment } from './../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {

  constructor(private http: Http, private errorHandlerSerivce: ErrorHandlerService) { }

  public AddEmail(emailAddress: string): Observable<any> {

    const message = {text: emailAddress};
    return this.http.post(environment.slackWebhookUrl, JSON.stringify(message));
  }
}
