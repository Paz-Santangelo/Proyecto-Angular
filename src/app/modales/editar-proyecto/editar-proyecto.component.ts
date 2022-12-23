import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  constructor(public proyectosService: ProyectosService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  editarProyecto() {
    this.proyectosService.proyectoModal.imgProyecto = this.imagenesService.url;
    this.proyectosService.updateProject(this.proyectosService.proyectoModal).subscribe(data => {
      this.proyectosService.proyectoModal = data;
      alert("Proyecto modificado exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  uploadImage($event: any) {
    const name = 'Proyecto';
    this.imagenesService.uploadImage($event, name);
  }

}
