import { Component, ViewChild } from '@angular/core';
//import { MiprimercomponenteComponent } from './subcomponente/miprimercomponente/miprimercomponente.component';
//import { RegistrousuarioComponent } from './subcomponente/registrousuario/registrousuario.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  providers: [Router]
})
export class autenticacionComponent {
 
  constructor(private router: Router){
  }


  @ViewChild(LoginComponent, {static: false})
  loginComponent!: LoginComponent;


  // @ViewChild(RegistrousuarioComponent, { static: false })
  // registroUsuario!: RegistrousuarioComponent;


  private mailUsuario: string = 'vmtdev@mail.com';


  private passUsuario: string = '123456.';


  pantallaPresentacion: string = 'LOGIN';


  mailDefecto = 'cliente@mail.com'


  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = dataCambio;
  }


  login() {
    // if(this.miPrimerComponente.emailusuario === this.mailUsuario){
    //   if(this.miPrimerComponente.passwordusuario === this.passUsuario){
    //     this.router.navigate(['/creacion']);


    //   } else {
    //     window.alert("Contrasenia incorrecta");
    //   }
    // } else {
    //   window.alert("Usuario incorrecto");
    // }
  }






}
