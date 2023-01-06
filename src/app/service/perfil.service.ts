import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  //URL = 'http://localhost:3000/perfil';
  //URL2 = 'http://localhost:8080/perfil/';
  URL2 = 'https://portfoliobackend-1hn5.onrender.com/perfil/';

  perfilModal: perfil = {
    id:null,
    imgPerfil: '',
    nombreCompleto: '',
    titulo: '',
    acerca: ''
  }

  constructor(private httpClient: HttpClient) { }

  getAllPerfil():Observable<perfil[]>{
    return this.httpClient.get<perfil[]>(this.URL2 + 'details');
  }

  getProfile(id:number) {
    const urlPerfil = this.URL2 + `details/${id}`;
    return this.httpClient.get<perfil>(urlPerfil);
  }

  updateProfile(perfil: perfil):Observable<any>{
    const urlPerfil = this.URL2 + `edit/${perfil.id}`;
    return this.httpClient.put<any>(urlPerfil, perfil);
  }
}
