import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion-admin',
  templateUrl: './educacion-admin.component.html',
  styleUrls: ['./educacion-admin.component.css']
})
export class EducacionAdminComponent implements OnInit {

  //Se llama al modelo Educación, el cual es un array.
  cursos: Educacion[] = [];
  //Se creó esta variable, de tipo booleano, para utilizarla en los botones de edición.
  isLogged: boolean = false;

  //Se inyectan los servicios que se van a utilizar
  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    /*Esta función trae toda la información proveniente de la base de datos, la cual pasa primero por el back-end
  y luego, por el servicio de educación, hasta llegar a la vista.
  */
    this.educacionService.getAllEducaciones().subscribe(data => this.cursos = data);

    /*
    Esta condicional establece que, si se obtiene el token, entonces el usuario está logueado, caso contrario
    no lo está. Lo cual permite que aparezcan los botones, usando la variable booleana anteriormente mencionada.
    */
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //Este método sirve para obtener el id de una determinada educación al hacer click en el ícono del lápiz y así, mandar todos los datos al modal de editar.
  traerEducacion(id: number) {
    this.educacionService.getEducation(id).subscribe(data => {
      this.educacionService.educacionModal = data;
    })
  }

   //Éste método permite eliminar una determinada experiencia, según el id.
  eliminarEducacion(id: number) {
    this.educacionService.deleteEducation(id).subscribe(data => {
      this.educacionService.educacionModal = data;
      alert("Tarjeta de Educación eliminada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  /*isLoggedIn(){
    return this.authService.isLoggedIn();
  }*/
}
