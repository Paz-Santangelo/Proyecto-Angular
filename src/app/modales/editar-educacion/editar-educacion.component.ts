import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  constructor(public educacionService: EducacionService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  editarEducacion(){
    this.educacionService.educacionModal.imgCurso = this.imagenesService.url;
    this.educacionService.updateEducation(this.educacionService.educacionModal).subscribe(data => {
      this.educacionService.educacionModal = data;
      alert("Educación modificada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  uploadImage($event: any) {
    const name = 'Educacion';
    this.imagenesService.uploadImage($event, name);
  }
}
