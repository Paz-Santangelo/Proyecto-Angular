import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  //Se inicializa el formulario.
  educacionForm: FormGroup;

  //Se inyectan los servicios que se van a utilizar.
  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, public imagenesService: ImagenesService) {
    //Se crea el formulario, con sus propiedades y validaciones.
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

  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end. */
  crearNuevoCurso():void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/
    this.educacionForm.value.imgCurso = this.imagenesService.url;
    this.educacionService.newEducation(this.educacionForm.value).subscribe(data => {
      alert("Nuevo Curso agregado");
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
