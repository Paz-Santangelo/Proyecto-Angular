import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //URLexp = 'http://localhost:3000/experiencias';
  URLexp2 = 'http://localhost:8080/experiencia_laboral/';

  constructor(private httpClient: HttpClient) { }

  experienciaModal : Experiencias = {
    id:null,
    imgExperiencia: '',
    puesto: '',
    anio: '',
    descripcionTrabajo: ''
  }

  getAllExperiencias():Observable<Experiencias[]>{
    return this.httpClient.get<Experiencias[]>(this.URLexp2 + 'list');
  }

  getExperiencia(id:number){
    const urlExpId = this.URLexp2 + `getOne/${id}`;
    return this.httpClient.get<Experiencias>(urlExpId);
  }

  newExp(experiencia:Experiencias):Observable<any>{
    return this.httpClient.post<any>(this.URLexp2 + 'new', experiencia);
  }

  updateExp(experiencia: Experiencias):Observable<any> {
    const urlExpId = this.URLexp2 + `edit/${experiencia.id}`;
    return this.httpClient.put<any>(urlExpId, experiencia);
  }

  deleteExp(id:number):Observable<any>{
    const urlExpId = this.URLexp2 + `delete/${id}`;
    return this.httpClient.delete<any>(urlExpId);
  } 
}










/*detalles(id:number):Observable<Experiencias>{
    return this.httpClient.get<Experiencias>(this.URLexp + `${id}`);
  }

  actualizarExperiencia(id:number, experiencia:Experiencias):Observable<any>{
    return this.httpClient.put<any>(this.URLexp +`${id}`, experiencia);
  }*/