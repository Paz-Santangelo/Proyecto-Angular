import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = ' http://localhost:3000/';
  token: any;

  constructor(private httpClient: HttpClient, private router:Router) { }

  login(loginUser: Login){
    this.httpClient.post(this.url + "admin", loginUser).subscribe((resp:any) => {

      //this.router.navigate(['admin']);
      //Para guardar la sesion en localStorage
      localStorage.setItem('auth_token', resp.token);
    })
  };

  // Es para cerrar sesion, eliminando el token de localStorage
  logout() {
    localStorage.removeItem('token');
  }

  //Servicio para verificar si la sesion existe, devuelve un booleano que determina si un usuario esta autenticado
  public get logIn():boolean{
    return (localStorage.getItem('token') !== null);
  }

}
