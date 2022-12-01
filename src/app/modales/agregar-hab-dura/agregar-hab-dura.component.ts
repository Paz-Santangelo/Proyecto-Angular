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

  hardSkillForm : FormGroup;

  constructor(private hardsService: HardsSkillsService, private formBuilder: FormBuilder) {
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

  crearHabilidadDura():void{
    this.hardsService.newHardSkill(this.hardSkillForm.value).subscribe(data => {
      alert("Nueva habilidad dura agregada");
      window.location.reload();
    })
  }

}
