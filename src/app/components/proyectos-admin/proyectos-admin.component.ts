import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos-admin',
  templateUrl: './proyectos-admin.component.html',
  styleUrls: ['./proyectos-admin.component.css']
})
export class ProyectosAdminComponent implements OnInit {

  proyectos: Proyecto[] = [];
  isLogged: boolean = false;

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService, private sanitizer: DomSanitizer) { }

  public getSanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this.proyectosService.getAllProjects().subscribe(data => this.proyectos = data);

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
