import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLoginError = new EventEmitter<any>();
  @Output() onLoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();

  ame:string;
  email: string;
  password: string;
  errorMessage:string;
  successmsg:string;

  constructor() { }

  ngOnInit(): void {
  }

  login() : void {
    this.errorMessage=null;
    this.successmsg=null;
  
    if(this.email == 'admin' && this.password == 'admin'){
      sessionStorage.setItem('isLoggedIn', "true");  
      sessionStorage.setItem('username', this.email ); 
      this.onLoginSuccess.emit('form submitted successfully');
      this.onLoginError.emit('Wrong data entered');     
    }else {
      alert("Invalid credentials");
    }
  }

  redirect(){
    this.asGuestLogin.emit('logged in as a guest');
    // this.router.navigate(["tab"]);
  }
}
