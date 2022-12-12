import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  proyectoForm: FormGroup;

  constructor(private proyectosService: ProyectosService, private formBuilder: FormBuilder) {
    this.proyectoForm = this.formBuilder.group({
      imgProyecto: ['', [Validators.required]],
      nombreProyecto: ['', [Validators.required]],
      descripcionProyecto: ['', [Validators.required]],
      linkProyecto: ['', [Validators.required]]
    })
   }

  ngOnInit(): void { 
  }

  get imgProyecto(){
    return this.proyectoForm.get("imgProyecto");
  }

  get nombreProyecto() {
    return this.proyectoForm.get("nombreProyecto");
  }

  get descripcionProyecto() {
    return this.proyectoForm.get("descripcionProyecto");
  }

  get linkProyecto() {
    return this.proyectoForm.get("linkProyecto");
  }

  crearNuevoProyecto(): void {
    this.proyectosService.newProject(this.proyectoForm.value).subscribe(data => {
      alert("Nuevo proyecto agregado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
