import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  urlProyectos = 'http://localhost:3000/proyectos';

  proyectoModal: Proyecto = {
    id: null,
    imgProyecto: '',
    nombreProyecto: '',
    descripcionProyecto: ''
  }

  constructor(private httpClient: HttpClient) { }

  getAllProjects():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.urlProyectos);
  }

  getProject(id:number){
    return this.httpClient.get<Proyecto>(this.urlProyectos + `/${id}`);
  }

  newProject(proyecto: Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.urlProyectos, proyecto);
  }

  updateProject(proyecto: Proyecto):Observable<any>{
    const urlProyectoID = this.urlProyectos + `/${proyecto.id}`;
    return this.httpClient.put<any>(urlProyectoID, proyecto);
  }

  deleteProject(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.urlProyectos + `/${id}`)
  }

}
