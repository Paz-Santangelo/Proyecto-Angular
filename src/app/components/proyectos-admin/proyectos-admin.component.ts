import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos-admin',
  templateUrl: './proyectos-admin.component.html',
  styleUrls: ['./proyectos-admin.component.css']
})
export class ProyectosAdminComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private proyectosService: ProyectosService, private authService: AuthService) { }

  ngOnInit(): void {
    this.proyectosService.getAllProjects().subscribe(data => this.proyectos = data);

    this.isLoggedIn();
  }

  traerProyecto(id:number){
    this.proyectosService.getProject(id).subscribe(data => {
      this.proyectosService.proyectoModal = data;
    })
  }

  eliminarProyecto(id:number){
    this.proyectosService.deleteProject(id).subscribe(data => {
      this.proyectosService.proyectoModal = data;
      alert("Proyecto eliminado");
      window.location.reload();
    })
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
