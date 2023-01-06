import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-modalLogin',
  templateUrl: './modalLogin.component.html',
  styleUrls: ['./modalLogin.component.css']
})
export class ModalLoginComponent implements OnInit {

  isLogged = false;
  notLogged = false;
  roles: string[] = [];
  errorMsj: string;

  loginForm: FormGroup;

  constructor(private authService: AuthService, private tokenService: TokenService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.notLogged = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get Usuario() {
    return this.loginForm.get("nombreUsuario");
  }

  get Password() {
    return this.loginForm.get("password");
  }

  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      /*this.isLogged = true;
      this.notLogged = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;*/
      console.log(data);
      //window.location.reload();
    }, err => {
      //this.isLogged = false;
      //this.notLogged = true;
      //this.errorMsj = err.error.mensaje;
      console.log("Error de servicio: " + err);
      alert("Usuario o Contraseña incorrectos");
      }
    )
  }

  /*
  console.log(this.loginForm.value);
  this.authService.login(this.loginForm.value);
  */

}
