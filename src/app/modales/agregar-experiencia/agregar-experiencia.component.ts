import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  imgExperiencia: string = '';
  puesto: string = '';
  anio: string = '';
  descripcionTrabajo: string = '';

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  crearExp():void{
    const nuevaExperiencia = new Experiencias(this.imgExperiencia, this.puesto, this.anio, this.descripcionTrabajo);
    this.experienciaService.nuevaExp(nuevaExperiencia).subscribe(data => {
      alert("Experiencia agregada");
      window.location.reload();
    });
  }

}
