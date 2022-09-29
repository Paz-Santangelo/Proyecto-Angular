import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/models/hys';
import { AuthService } from 'src/app/service/auth.service';
import { HySService } from 'src/app/service/HyS.service';

@Component({
  selector: 'app-hard-soft-admin',
  templateUrl: './hard-soft-admin.component.html',
  styleUrls: ['./hard-soft-admin.component.css']
})
export class HardSoftAdminComponent implements OnInit {

  habilidades: Hys[] = [];

  constructor(private skillsService: HySService, private authService: AuthService) { }

  ngOnInit(): void {
    this.skillsService.getAllSkills().subscribe(data => this.habilidades = data);

    this.isLoggedIn();
  }

  traerHabilidad(id:number){
    this.skillsService.getSkill(id).subscribe(data => {
      this.skillsService.habilidadModal = data;
    });
  }

  eliminarHabilidad(id:number){
    this.skillsService.deleteSkill(id).subscribe(data => {
      this.skillsService.habilidadModal = data;
      alert("Tarjeta de habilidad eliminada");
      window.location.reload();
    })
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
