import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //urlEdu = 'http://localhost:3000/educacion';
  urlEdu2 = 'http://localhost:8080/educacion/'

  constructor(private httpClient: HttpClient) { }

  /* Propiedad de tipo educacion. Lo utilizo para que los inputs, del modal editar, contengan los valores de la
  card seleccionada.
  */
  educacionModal : Educacion = {
    id: null,
    imgCurso: '',
    tituloCurso: '',
    anio: '',
    descripcionCurso: ''
  }

  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar cursos.
  */
  getAllEducaciones():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.urlEdu2 + 'list');
  }

  getEducation(id:number){
    return this.httpClient.get<Educacion>(this.urlEdu2 + `getOne/${id}`);
  }

  newEducation(educacion:Educacion):Observable<Educacion>{
    return this.httpClient.post<Educacion>(this.urlEdu2 + 'new', educacion);
  }

  updateEducation(educacion:Educacion):Observable<any>{
    const urlEdId = this.urlEdu2 + `edit/${educacion.id}`;
    return this.httpClient.put<any>(urlEdId, educacion);
  }

  deleteEducation(id:number):Observable<any>{
    const urlEdId = this.urlEdu2 + `delete/${id}`;
    return this.httpClient.delete<any>(urlEdId);
  }

}
