import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  imgProyecto: string;
  nombreProyecto: string;
  descripcionProyecto: string;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void { 
  }

  crearNuevoProyecto(): void {
    const nuevoProyecto = new Proyecto(this.imgProyecto, this.nombreProyecto, this.descripcionProyecto);
    this.proyectosService.newProject(nuevoProyecto).subscribe(data => {
      alert("Nuevo proyecto agregado");
      window.location.reload();
    })
  }

}
