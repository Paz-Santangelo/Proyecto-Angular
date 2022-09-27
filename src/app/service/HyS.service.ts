import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hys } from '../models/hys';

@Injectable({
  providedIn: 'root'
})
export class HySService {
  urlHabilidades = 'http://localhost:3000/hardSoft';

  habilidadModal: Hys = {
    porcentaje: '',
    nombre: ''
  }

  constructor(private httpClient: HttpClient) { }

  getAllSkills():Observable<Hys[]> {
    return this.httpClient.get<Hys[]>(this.urlHabilidades);
  }

  getSkill(id:number) {
    return this.httpClient.get<Hys>(this.urlHabilidades + `/${id}`);
  }

  newSkill(skill: Hys):Observable<Hys>{
    return this.httpClient.post<Hys>(this.urlHabilidades, skill);
  }

  updateSkill(skill: Hys):Observable<any>{
    const urlSkillID = this.urlHabilidades + `/${skill.id}`;
    return this.httpClient.put<any>(urlSkillID, skill);
  }

  deleteSkill(id:number):Observable<any>{
    const urlSkillID = this.urlHabilidades + `/${id}`;
    return this.httpClient.delete<any>(urlSkillID);
  }

}
