import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router){
    
  }

  loginUser(){
    if(this.username==='abc' && this.password==='password'){
      this.displayError = false
      this.router.navigate(['welcome', this.username])
    }else{
      this.displayError = true
    }
  }
}
