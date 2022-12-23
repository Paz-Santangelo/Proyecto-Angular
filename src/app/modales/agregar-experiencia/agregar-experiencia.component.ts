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

  experienciaForm: FormGroup;

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, public imagenesService: ImagenesService) {
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


  crearExp():void{
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

  uploadImage($event: any) {
    const name = 'Experiencia';
    this.imagenesService.uploadImage($event, name);
  }
}
