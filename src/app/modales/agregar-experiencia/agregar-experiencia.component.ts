import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  //Se inicializa el formulario.
  experienciaForm: FormGroup;

  //Se inyectan los servicios que se van a utilizar.
  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, public imagenesService: ImagenesService) {
    //Se crea el formulario, con sus propiedades y validaciones.
    this.experienciaForm = this.formBuilder.group({
      imgExperiencia: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      descripcionTrabajo: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get imgExp(){
    return this.experienciaForm.get("imgExperiencia");
  }

  get puestoExp() {
    return this.experienciaForm.get("puesto");
  }

  get anioExp() {
    return this.experienciaForm.get("anio");
  }

  get descripcionExp() {
    return this.experienciaForm.get("descripcionTrabajo");
  }


  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end. */
  crearExp():void{
    /*
    Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, 
    junto con los demás valores del formulario.
    */
    this.experienciaForm.value.imgExperiencia = this.imagenesService.url;
    this.experienciaService.newExp(this.experienciaForm.value).subscribe(data => {
      alert("Experiencia agregada");
      this.clearForm();
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  clearForm() {
    this.imagenesService.url = "";
    this.experienciaForm.reset({});
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Experiencia';
    this.imagenesService.uploadImage($event, name);
  }
}
