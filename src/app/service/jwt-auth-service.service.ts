import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APP_URL } from '../app.constants';

const AuthUser = 'authinticatedUser';
const AuthToken = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class JWTAuthServiceService {

  constructor(private http:HttpClient) { }

  executeJWTAuthentication(username: string, password: string){

    return this.http.post<any>(`${APP_URL}/authenticate`, {username: username, password: password}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AuthUser, username)
          sessionStorage.setItem(AuthToken, `Bearer ${data.token}`)
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
