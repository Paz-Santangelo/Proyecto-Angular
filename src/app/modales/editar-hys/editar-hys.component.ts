import { Component, OnInit } from '@angular/core';
import { HySService } from 'src/app/service/HyS.service';

@Component({
  selector: 'app-editar-hys',
  templateUrl: './editar-hys.component.html',
  styleUrls: ['./editar-hys.component.css']
})
export class EditarHysComponent implements OnInit {

   //Se inyectan los servicios que se van a utilizar.
  constructor(public skillService: HySService) { }

  ngOnInit(): void {
  }

  //Se obtienen todos los valores guardados en modalHards, ubicado en el servicio de habilidades y se los envía a la base de datos.
  editarHabilidad(){
    this.skillService.updateSkill(this.skillService.habilidadModal).subscribe(data => {
      this.skillService.habilidadModal = data;
      alert("Habilidad blanda modificada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
}
