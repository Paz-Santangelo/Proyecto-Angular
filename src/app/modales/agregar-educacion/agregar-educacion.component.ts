import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

    imgCurso: string;
    tituloCurso: string;
    anio: string;
    descripcionCurso: string;

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  crearNuevoCurso():void {
    const nuevoCurso = new Educacion(this.imgCurso, this.tituloCurso, this.anio, this.descripcionCurso);
    this.educacionService.newEducation(nuevoCurso).subscribe(data => {
      alert("Nuevo Curso agregado");
      window.location.reload();
    })
  }

}
