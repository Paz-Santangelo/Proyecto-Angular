import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  //Se inyectan los servicios que se van a utilizar.
  constructor(public experienciaService: ExperienciaService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  editarExp(){
    /*
    Acá se obtiene la propiedad de imgExperiencia y valor del modal ubicado en el servicio de experiencia y se introduce la url obtenida de la imagen, 
    proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.
    */
    this.experienciaService.experienciaModal.imgExperiencia = this.imagenesService.url;
    this.experienciaService.updateExp(this.experienciaService.experienciaModal).subscribe(datos => {
      this.experienciaService.experienciaModal = datos;
      alert("Experiencia modificada exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Experiencia'
    this.imagenesService.uploadImage($event, name);
  }
}
