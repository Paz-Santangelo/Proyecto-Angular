import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  constructor(public proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

  editarProyecto() {
    this.proyectosService.updateProject(this.proyectosService.proyectoModal).subscribe(data => {
      this.proyectosService.proyectoModal = data;
      alert("Proyecto modificado exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
