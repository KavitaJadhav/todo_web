import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthServiceService {

  constructor() { }

  authinticate(username: string, password: string){
    if (username==='abc' && password==='password'){
sessionStorage.setItem('authinticatedUser', username)
      return true;
    }else{
      return false;
    }
  }

  isUserloggedIn(){
    return sessionStorage.getItem('authinticatedUser') != null;
  }
  
  logout(){
    sessionStorage.removeItem('authinticatedUser')
  }
}
