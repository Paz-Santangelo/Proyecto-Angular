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

  softSkillForm: FormGroup;

  constructor(private skillsService: HySService, private formBuilder: FormBuilder) {
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

  crearNewSkill():void{
    this.skillsService.newSkill(this.softSkillForm.value).subscribe(data => {
      alert("Nueva habilidad agregada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
