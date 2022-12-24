import { Component, OnInit } from '@angular/core';
import { HardsSkillsService } from 'src/app/service/HardsSkills.service';

@Component({
  selector: 'app-editar-hab-duras',
  templateUrl: './editar-hab-duras.component.html',
  styleUrls: ['./editar-hab-duras.component.css']
})
export class EditarHabDurasComponent implements OnInit {

  //Se inyectan los servicios que se van a utilizar.
  constructor(public hardsService: HardsSkillsService) { }

  ngOnInit(): void {
  }

  //Se obtienen todos los valores guardados en modalHards, ubicado en el servicio de habilidades y se los envía a la base de datos.
  editarHabilidadDura(){
    this.hardsService.updateHardSkill(this.hardsService.modalHards).subscribe(data => {
      this.hardsService.modalHards = data;
      alert("Habilidad dura modificada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
}
