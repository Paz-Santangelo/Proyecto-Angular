import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi-admin',
  templateUrl: './sobre-mi-admin.component.html',
  styleUrls: ['./sobre-mi-admin.component.css']
})
export class SobreMiAdminComponent implements OnInit {

  //Se llama al modelo Proyecto, el cual es un array.
  perfil: perfil[] = [];

  //Se inyectan los servicios que se van a utilizar
  constructor(public perfilService: PerfilService, private tokenService: TokenService) { }

  //Se creó esta variable, de tipo booleano, para utilizarla en los botones de edición.
  isLogged: boolean = false;

  ngOnInit(): void {
    /*Esta función trae toda la información proveniente de la base de datos, la cual pasa primero por el back-end
    y luego, por el servicio de experiencia, hasta llegar a la vista.
    */
    this.perfilService.getAllPerfil().subscribe(data => {this.perfil = data});

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
  traerPerfil(id:number){
    this.perfilService.getProfile(id).subscribe(data => {
      this.perfilService.perfilModal = data;
    });
  }
}
