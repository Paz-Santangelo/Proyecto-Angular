import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  //Se inyectan los servicios que se van a utilizar.
  constructor(public proyectosService: ProyectosService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }
  
  editarProyecto() {
    /*
    Acá se obtiene la propiedad de imgCurso y valor del modal ubicado en el servicio de educación y se introduce la url obtenida de la imagen, 
    proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.
    */
    this.proyectosService.proyectoModal.imgProyecto = this.imagenesService.url;
    this.proyectosService.updateProject(this.proyectosService.proyectoModal).subscribe(data => {
      this.proyectosService.proyectoModal = data;
      alert("Proyecto modificado exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Proyecto';
    this.imagenesService.uploadImage($event, name);
  }

}
