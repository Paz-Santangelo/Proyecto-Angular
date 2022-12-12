import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/models/hys';
import { AuthService } from 'src/app/service/auth.service';
import { HySService } from 'src/app/service/HyS.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-admin',
  templateUrl: './hard-soft-admin.component.html',
  styleUrls: ['./hard-soft-admin.component.css']
})
export class HardSoftAdminComponent implements OnInit {

  habilidades: Hys[] = [];
  isLogged: boolean = false;

  constructor(private skillsService: HySService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.skillsService.getAllSkills().subscribe(data => this.habilidades = data);

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
