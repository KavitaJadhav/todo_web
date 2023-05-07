import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';
import { BasicdAuthServiceService } from '../service/basic-auth-service.service';
import { JWTAuthServiceService } from '../service/jwt-auth-service.service';

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

  constructor(private router : Router, private hardCodedAuthServiceService:HardCodedAuthServiceService, 
    private basicdAuthServiceService:BasicdAuthServiceService, private jwtAuthServiceService:JWTAuthServiceService){
    
  }

  // Hardcdoe login
  loginUser(){
    if(this.hardCodedAuthServiceService.authinticate(this.username, this.password)){
      this.displayError = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.displayError = true
    }
  }

  basicAuthLogin(){
     this.basicdAuthServiceService.executeBasicAuthentication(this.username, this.password).subscribe(
      data=>{
        this.displayError = false
        this.router.navigate(['welcome', this.username])
      },
      error=>{
        this.displayError = true
      }
    )
  }
  
  jwtAuthLogin(){
    this.jwtAuthServiceService.executeJWTAuthentication(this.username, this.password).subscribe(
     data=>{
       this.displayError = false
       this.router.navigate(['welcome', this.username])
     },
     error=>{
       this.displayError = true
     }
   )
 }
}
