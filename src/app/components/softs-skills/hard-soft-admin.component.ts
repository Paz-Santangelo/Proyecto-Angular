import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/models/hys';
import { HySService } from 'src/app/service/HyS.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-admin',
  templateUrl: './hard-soft-admin.component.html',
  styleUrls: ['./hard-soft-admin.component.css']
})
export class HardSoftAdminComponent implements OnInit {

  //Se llama al modelo hys (habilidad blanda), el cual es un array.
  habilidades: Hys[] = [];
  //Se creó esta variable, de tipo booleano, para utilizarla en los botones de edición.
  isLogged: boolean = false;

  //Se inyectan los servicios que se van a utilizar
  constructor(private skillsService: HySService, private tokenService: TokenService) { }

  ngOnInit(): void {
    /*Esta función trae toda la información proveniente de la base de datos, la cual pasa primero por el back-end
    y luego, por el servicio de experiencia, hasta llegar a la vista.
    */
    this.skillsService.getAllSkills().subscribe(data => this.habilidades = data);

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

  //Este método sirve para obtener el id de una determinada habilidad blanda al hacer click en el ícono del lápiz y así, mandar todos los datos al modal de editar
  traerHabilidad(id:number){
    this.skillsService.getSkill(id).subscribe(data => {
      this.skillsService.habilidadModal = data;
    });
  }

  //Éste método permite eliminar una determinada habilidad blanda, según el id.
  eliminarHabilidad(id:number){
    this.skillsService.deleteSkill(id).subscribe(data => {
      this.skillsService.habilidadModal = data;
      alert("Tarjeta de habilidad eliminada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
