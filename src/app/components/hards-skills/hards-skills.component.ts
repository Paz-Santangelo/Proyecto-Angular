import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/models/hardSkill';
import { Hys } from 'src/app/models/hys';
import { AuthService } from 'src/app/service/auth.service';
import { HardsSkillsService } from 'src/app/service/HardsSkills.service';

@Component({
  selector: 'app-hards-skills',
  templateUrl: './hards-skills.component.html',
  styleUrls: ['./hards-skills.component.css']
})
export class HardsSkillsComponent implements OnInit {

  habilidadesDuras: HardSkill[] = []; 

  constructor(private hardsService: HardsSkillsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.hardsService.getAllHS().subscribe(data => this.habilidadesDuras = data);

  }

  traerHabilidadDura(id: number) {
    this.hardsService.getHardSkill(id).subscribe(data => {
      console.log(data);
      this.hardsService.modalHards = data;
    })
  }

  eliminarHabilidadDura(id:number){
    this.hardsService.deleteHard(id).subscribe(data => {
      this.hardsService.modalHards = data;
      alert("Tarjeta de habilidad dura eliminada");
      window.location.reload();
    })
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}