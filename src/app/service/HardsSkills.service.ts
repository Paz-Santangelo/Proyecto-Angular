import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../models/hardSkill';


@Injectable({
  providedIn: 'root'
})
export class HardsSkillsService {

  //urlHardsSkills = 'http://localhost:3000/hardsSkill';
  //urlHardsSkills2 = 'http://localhost:8080/hards_skills/';
  urlHardsSkills2 = 'https://portfoliobackend-1hn5.onrender.com/hards_skills/';
  

  /* Propiedad de tipo HardSkill. Lo utilizo para que los inputs, del modal editar, contengan los valores de la
  card seleccionada.
  */
  modalHards: HardSkill = {
    porcentaje: '',
    nombre: ''
  }

  constructor(private httpClient: HttpClient) { }

  
  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar habilidades duras.
  */
  getAllHS(): Observable<HardSkill[]> {
    return this.httpClient.get<HardSkill[]>(this.urlHardsSkills2 + 'list');
  }

  getHardSkill(id:number) {
    return this.httpClient.get<HardSkill>(this.urlHardsSkills2 + `getOne/${id}`);
  }

  newHardSkill(hard:HardSkill):Observable<HardSkill>{
    return this.httpClient.post<HardSkill>(this.urlHardsSkills2 + 'new', hard);
  }

  updateHardSkill(hard: HardSkill):Observable<any>{
    const urlHardID = this.urlHardsSkills2 + `edit/${hard.id}`;
    return this.httpClient.put<any>(urlHardID, hard);
  }

  deleteHard(id:number):Observable<any>{
    const urlHardID = this.urlHardsSkills2 + `delete/${id}`;
    return this.httpClient.delete<any>(urlHardID);
  }
}
