import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  educacionForm: FormGroup;

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder) {
    this.educacionForm = this.formBuilder.group({
      imgCurso: ['', [Validators.required]],
      tituloCurso: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      descripcionCurso: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get imagenCurso() {
    return this.educacionForm.get("imgCurso");
  }

  get tituloCurso() {
    return this.educacionForm.get("tituloCurso");
  }

  get anioCurso() {
    return this.educacionForm.get("anio");
  }

  get descripcionCurso() {
    return this.educacionForm.get("descripcionCurso");
  }

  crearNuevoCurso():void {
    this.educacionService.newEducation(this.educacionForm.value).subscribe(data => {
      alert("Nuevo Curso agregado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
