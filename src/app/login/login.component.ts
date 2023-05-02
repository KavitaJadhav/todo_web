import { Component } from '@angular/core';

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

  loginUser(){
    if(this.username==='abc' && this.password==='password'){
      console.log('login successfull')
      this.displayError = false
    }else{
      this.displayError = true
    }
  }
}
