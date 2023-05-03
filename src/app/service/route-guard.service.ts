import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { HardCodedAuthServiceService } from './hard-coded-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardCodedAuthServiceService:HardCodedAuthServiceService, private router:Router) { }

canActivate(  route: ActivatedRouteSnapshot,  state: RouterStateSnapshot  ){
  if(this.hardCodedAuthServiceService.isUserloggedIn()){

    return true;
  }else{
    this.router.navigate(['login'])
    return false;
  }
  }
}
