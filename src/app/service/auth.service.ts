import { Injectable } from '@angular/core';
import { Login } from '../models/Login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = ' http://localhost:3000/';
  token: any;
  router: Router;

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string){
    this.httpClient.post(this.url + "auth", {email, password}).subscribe((resp:any) => {

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
