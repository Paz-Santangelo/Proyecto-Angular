import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencias } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  experienciaForm: FormGroup;

  /*imgExperiencia: string = '';
  puesto: string = '';
  anio: string = '';
  descripcionTrabajo: string = '';*/

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder) {
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
    //const nuevaExperiencia = new Experiencias(this.imgExperiencia, this.puesto, this.anio, this.descripcionTrabajo);
    this.experienciaService.newExp(this.experienciaForm.value).subscribe(data => {
      alert("Experiencia agregada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
