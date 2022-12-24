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

  //Se llama al modelo Proyecto, el cual es un array.
  proyectos: Proyecto[] = [];
  //Se creó esta variable, de tipo booleano, para utilizarla en los botones de edición.
  isLogged: boolean = false;

  //Se inyectan los servicios que se van a utilizar
  constructor(private proyectosService: ProyectosService, private tokenService: TokenService, private sanitizer: DomSanitizer) { }

  public getSanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    /*Esta función trae toda la información proveniente de la base de datos, la cual pasa primero por el back-end
    y luego, por el servicio de experiencia, hasta llegar a la vista.
    */
    this.proyectosService.getAllProjects().subscribe(data => this.proyectos = data);

    /*
    Esta condicional establece que, si se obtiene el token, entonces el usuario está logueado, caso contrario
    no lo está. Lo cual permite que aparezcan los botones, usando la variable booleana anteriormente mencionada.
    */
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //Este método sirve para obtener el id de un determinado proyecto al hacer click en el ícono del lápiz y así, mandar todos los datos al modal de editar
  traerProyecto(id:number){
    this.proyectosService.getProject(id).subscribe(data => {
      this.proyectosService.proyectoModal = data;
    })
  }

  //Éste método permite eliminar una determinada habilidad blanda, según el id.
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
