import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../models/hardSkill';


@Injectable({
  providedIn: 'root'
})
export class HardsSkillsService {

  urlHardsSkills = 'http://localhost:3000/hardsSkill';

  modalHards: HardSkill = {
    porcentaje: '',
    nombre: ''
  }

  constructor(private httpClient: HttpClient) { }

  getAllHS(): Observable<HardSkill[]> {
    return this.httpClient.get<HardSkill[]>(this.urlHardsSkills);
  }

  getHardSkill(id:number) {
    return this.httpClient.get<HardSkill>(this.urlHardsSkills + `/${id}`);
  }

  newHardSkill(hard:HardSkill):Observable<HardSkill>{
    return this.httpClient.post<HardSkill>(this.urlHardsSkills, hard);
  }

  updateHardSkill(hard: HardSkill):Observable<any>{
    const urlHardID = this.urlHardsSkills + `/${hard.id}`;
    return this.httpClient.put<any>(urlHardID, hard);
  }

  deleteHard(id:number):Observable<any>{
    const urlHardID = this.urlHardsSkills + `/${id}`;
    return this.httpClient.delete<any>(urlHardID);
  }
}
