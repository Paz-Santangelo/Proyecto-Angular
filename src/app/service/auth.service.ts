import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = ' http://localhost:3000/';
  token:string = 'hola mundo';
  key: string = 'auth_token';


  constructor(private httpClient: HttpClient, private router:Router) { }

  login(loginUser: Login){
      //this.httpClient.post<any>(this.url + "admin", loginUser).subscribe((resp:any) => {

      this.router.navigate(['']);
      //Para guardar la sesion en localStorage
      localStorage.setItem(this.key, this.token);
   // })
  };

  // Es para cerrar sesion, eliminando el token de localStorage
  logout() {
    localStorage.removeItem(this.key);
  }

  //Servicio para verificar si la sesion existe, devuelve un booleano que determina si un usuario esta autenticado
  public isLoggedIn():boolean{
    return (localStorage.getItem(this.key) !== null);
  }

}
