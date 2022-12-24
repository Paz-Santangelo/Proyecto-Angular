import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkill } from 'src/app/models/hardSkill';
import { HardsSkillsService } from 'src/app/service/HardsSkills.service';

@Component({
  selector: 'app-agregar-hab-dura',
  templateUrl: './agregar-hab-dura.component.html',
  styleUrls: ['./agregar-hab-dura.component.css']
})
export class AgregarHabDuraComponent implements OnInit {

  //Se inicializa el formulario.
  hardSkillForm : FormGroup;

  //Se inyectan los servicios que se van a utilizar.
  constructor(private hardsService: HardsSkillsService, private formBuilder: FormBuilder) {
    //Se crea el formulario, con sus propiedades y validaciones.
    this.hardSkillForm = this.formBuilder.group({
      porcentaje: ['', [Validators.required]],
      nombre: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get porcentaje() {
    return this.hardSkillForm.get("porcentaje");
  }

  get nombre() {
    return this.hardSkillForm.get("nombre");
  }

  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end.*/
  crearHabilidadDura():void{
    this.hardsService.newHardSkill(this.hardSkillForm.value).subscribe(data => {
      alert("Nueva habilidad dura agregada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
