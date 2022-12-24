import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  //Se inyectan los servicios que se van a utilizar.
  constructor(public educacionService: EducacionService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  editarEducacion(){
    /*
    Acá se obtiene la propiedad de imgCurso y valor del modal ubicado en el servicio de educación y se introduce la url obtenida de la imagen, 
    proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.
    */
    this.educacionService.educacionModal.imgCurso = this.imagenesService.url;
    this.educacionService.updateEducation(this.educacionService.educacionModal).subscribe(data => {
      this.educacionService.educacionModal = data;
      alert("Educación modificada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Educacion';
    this.imagenesService.uploadImage($event, name);
  }
}
