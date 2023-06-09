import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APP_URL } from '../app.constants';

const AuthUser = 'authinticatedUser';
const AuthToken = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class BasicdAuthServiceService {

  constructor(private http:HttpClient) { }


  executeBasicAuthentication(username: string, password: string){
    let authorizationString = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({Authorization: authorizationString})
    return this.http.get<BasicAuthBean>(`${APP_URL}/basicauth`, {headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AuthUser, username)
          sessionStorage.setItem(AuthToken, authorizationString)
          return data
        }
      )
    )
  }


  isUserloggedIn(){
    return sessionStorage.getItem(AuthUser) != null;
  }

  getAuthUser(){
    return sessionStorage.getItem(AuthUser)
  }
  
  public getAuthToken(){
    return sessionStorage.getItem(AuthToken)
  }
  
  logout(){
    sessionStorage.removeItem(AuthUser)
    sessionStorage.removeItem(AuthToken)
  }
}

class BasicAuthBean{
  constructor(private message:string){}
}
