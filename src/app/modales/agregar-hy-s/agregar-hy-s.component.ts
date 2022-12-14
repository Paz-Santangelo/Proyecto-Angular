import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hys } from 'src/app/models/hys';
import { HySService } from 'src/app/service/HyS.service';

@Component({
  selector: 'app-agregar-hy-s',
  templateUrl: './agregar-hy-s.component.html',
  styleUrls: ['./agregar-hy-s.component.css']
})
export class AgregarHySComponent implements OnInit {

  //Se inicializa el formulario.
  softSkillForm: FormGroup;

  //Se inyectan los servicios que se van a utilizar.
  constructor(private skillsService: HySService, private formBuilder: FormBuilder) {
    //Se crea el formulario, con sus propiedades y validaciones.
    this.softSkillForm = this.formBuilder.group ({
      porcentaje: ['', [Validators.required]],
      nombre: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get porcentaje(){
    return this.softSkillForm.get("porcentaje");
  }

  get nombre() {
    return this.softSkillForm.get("nombre");
  }

  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end.*/
  crearNewSkill():void{
    this.skillsService.newSkill(this.softSkillForm.value).subscribe(data => {
      alert("Nueva habilidad agregada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
