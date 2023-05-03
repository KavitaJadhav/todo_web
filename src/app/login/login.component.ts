import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  displayError : boolean = false
  errorMessage : string = 'Invalid crediantials'
  username : string = ''
  password : string = ''

  constructor(private router : Router, private hardCodedAuthServiceService:HardCodedAuthServiceService){
    
  }

  loginUser(){
    if(this.hardCodedAuthServiceService.authinticate(this.username, this.password)){
      this.displayError = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.displayError = true
    }
  }
}
