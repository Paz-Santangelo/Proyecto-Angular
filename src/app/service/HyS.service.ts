import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hys } from '../models/hys';

@Injectable({
  providedIn: 'root'
})
export class HySService {
  //urlHabilidades = 'http://localhost:3000/hardSoft';
  urlSoftSkill = 'http://localhost:8080/soft_skills/';

  habilidadModal: Hys = {
    porcentaje: '',
    nombre: ''
  }

  constructor(private httpClient: HttpClient) { }

  getAllSkills():Observable<Hys[]> {
    return this.httpClient.get<Hys[]>(this.urlSoftSkill + 'list');
  }

  getSkill(id:number) {
    return this.httpClient.get<Hys>(this.urlSoftSkill + `getOne/${id}`);
  }

  newSkill(skill: Hys):Observable<Hys>{
    return this.httpClient.post<Hys>(this.urlSoftSkill + 'new', skill);
  }

  updateSkill(skill: Hys):Observable<any>{
    const urlSkillID = this.urlSoftSkill + `edit/${skill.id}`;
    return this.httpClient.put<any>(urlSkillID, skill);
  }

  deleteSkill(id:number):Observable<any>{
    const urlSkillID = this.urlSoftSkill + `delete/${id}`;
    return this.httpClient.delete<any>(urlSkillID);
  }

}
