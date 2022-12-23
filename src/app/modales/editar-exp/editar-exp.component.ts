import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  //public values:Experiencias;

  constructor(public experienciaService: ExperienciaService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  editarExp(){
    this.experienciaService.experienciaModal.imgExperiencia = this.imagenesService.url;
    this.experienciaService.updateExp(this.experienciaService.experienciaModal).subscribe(datos => {
      this.experienciaService.experienciaModal = datos;
      alert("Experiencia modificada exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  uploadImage($event: any) {
    const name = 'Experiencia'
    this.imagenesService.uploadImage($event, name);
  }
}
