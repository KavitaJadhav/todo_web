import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthServiceService {

  constructor() { }

  authinticate(username: string, password: string){
    return (username==='abc' && password==='password')
  }
}
