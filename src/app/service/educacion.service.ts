import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  urlEdu = 'http://localhost:3000/educacion';

  constructor(private httpClient: HttpClient) { }

  educacionModal : Educacion = {
    id: null,
    imgCurso: '',
    tituloCurso: '',
    anio: '',
    descripcionCurso: ''
  }

  getAllEducaciones():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.urlEdu);
  }

  getEducation(id:number){
    return this.httpClient.get<Educacion>(this.urlEdu + `/${id}`);
  }

  newEducation(educacion:Educacion):Observable<Educacion>{
    return this.httpClient.post<Educacion>(this.urlEdu, educacion);
  }

  updateEducation(educacion:Educacion):Observable<any>{
    const urlEdId = `${this.urlEdu}/${educacion.id}`;
    return this.httpClient.put<any>(urlEdId, educacion);
  }

  deleteEducation(id:number):Observable<any>{
    const urlEdId = `${this.urlEdu}/${id}`;
    return this.httpClient.delete<any>(urlEdId);
  }

}
