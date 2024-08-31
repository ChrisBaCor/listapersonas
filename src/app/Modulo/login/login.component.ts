import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  labelLogin: string = 'LOGIN';
  emailusuario: string = ''; // two way binging
  passwordusuario: string = '';

  login(){

  }

  eventoCambioPantalla(){
    
  }

}
