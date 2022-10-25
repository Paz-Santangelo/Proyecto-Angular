import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  URL = 'http://localhost:3000/perfil';

  perfilModal: perfil = {
    id:null,
    imgPerfil: '',
    nombreCompleto: '',
    titulo: '',
    acerca: ''
  }

  constructor(private httpClient: HttpClient) { }

  getAllPerfil():Observable<perfil[]>{
    return this.httpClient.get<perfil[]>(this.URL);
  }

  getProfile(id:number) {
    const urlPerfil = this.URL + `/${id}`;
    return this.httpClient.get<perfil>(urlPerfil);
  }

  updateProfile(perfil: perfil):Observable<any>{
    const urlPerfil = this.URL + `/${perfil.id}`;
    return this.httpClient.put<any>(urlPerfil, perfil);
  }
}
