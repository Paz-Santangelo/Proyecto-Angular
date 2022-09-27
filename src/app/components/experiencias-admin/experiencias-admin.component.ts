import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencias-admin',
  templateUrl: './experiencias-admin.component.html',
  styleUrls: ['./experiencias-admin.component.css']
})
export class ExperienciasAdminComponent implements OnInit {

  experiencias: Experiencias[] = [];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarEperiencia();
  }

  //Para traer todos los datos del JSON SERVER
  cargarEperiencia(): void {
    this.experienciaService.getAllExperiencia().subscribe(datos => this.experiencias = datos);
  }

  //Este metodo sirve para traer una determinada experiencia al hacer click en el icono del lapiz
  traerUnaExperiencia(id: number) {
    //console.log(id);
    this.experienciaService.getExperiencia(id).subscribe(data => {
      this.experienciaService.experienciaModal = data;
    });
  }

  eliminarExp(id:number) {
    this.experienciaService.deleteExp(id).subscribe(data => {
      this.experienciaService.experienciaModal = data;
      alert("Tarjeta de Experiencia laboral eliminada");
      window.location.reload();
    })
  }
}
