import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicdAuthServiceService {

  constructor(private http:HttpClient) { }

  authinticate(username: string, password: string){
    if (username==='abc' && password==='password'){
sessionStorage.setItem('authinticatedUser', username)
      return true;
    }else{
      return false;
    }
  }

  executeBasicAuthentication(username: string, password: string){
    let authorizationString = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({Authorization: authorizationString})
    return this.http.get<BasicAuthBean>(`http://localhost:8080/basicauth`, {headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authinticatedUser', username)
          return data
        }
      )
    )
  }


  isUserloggedIn(){
    return sessionStorage.getItem('authinticatedUser') != null;
  }
  
  logout(){
    sessionStorage.removeItem('authinticatedUser')
  }
}

class BasicAuthBean{
  constructor(private message:string){}
}
