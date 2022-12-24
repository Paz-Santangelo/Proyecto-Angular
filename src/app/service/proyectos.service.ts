import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  //urlProyectos = 'http://localhost:3000/proyectos';
  urlProyectos2 = 'http://localhost:8080/proyectos/';

  
  /* Propiedad de tipo proyecto. Lo utilizo para que los inputs, del modal editar, contengan los valores de la
  card seleccionada.
  */
  proyectoModal: Proyecto = {
    id: null,
    imgProyecto: '',
    nombreProyecto: '',
    descripcionProyecto: '',
    linkProyecto: ''
  }

  constructor(private httpClient: HttpClient) { }

   /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar proyectos.
  */
  getAllProjects():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.urlProyectos2 + 'list');
  }

  getProject(id:number){
    return this.httpClient.get<Proyecto>(this.urlProyectos2 + `getOne/${id}`);
  }

  newProject(proyecto: Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.urlProyectos2 + 'new', proyecto);
  }

  updateProject(proyecto: Proyecto):Observable<any>{
    const urlProyectoID = this.urlProyectos2 + `edit/${proyecto.id}`;
    return this.httpClient.put<any>(urlProyectoID, proyecto);
  }

  deleteProject(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlProyectos2 + `delete/${id}`);
  }

}
