import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicdAuthServiceService } from '../basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicdAuthServiceService:BasicdAuthServiceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let authorizationString= this.basicdAuthServiceService.getAuthToken()

    if(authorizationString)
      request = request.clone({setHeaders: {Authorization: authorizationString}})

   return next.handle(request)
  }
}
