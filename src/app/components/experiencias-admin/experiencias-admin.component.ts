import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencias-admin',
  templateUrl: './experiencias-admin.component.html',
  styleUrls: ['./experiencias-admin.component.css']
})
export class ExperienciasAdminComponent implements OnInit {

  //Se llama al modelo Experiencia, el cual es un array.
  experiencias: Experiencias[] = [];
  //Se creó esta variable, de tipo booleano, para utilizarla en los botones de edición.
  isLogged: boolean = false;

  //Se inyectan los servicios que se van a utilizar
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    //Se inicializa la función cargar experiencia.
    this.cargarEperiencia();

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
  
  /*Esta función trae toda la información proveniente de la base de datos, la cual pasa primero por el back-end
  y luego, por el servicio de experiencia, hasta llegar a la vista.
  */
  cargarEperiencia(): void {
    this.experienciaService.getAllExperiencias().subscribe(datos => this.experiencias = datos);
  }

  //Este método sirve para obtener el id de una determinada experiencia al hacer click en el ícono del lápiz y así, mandar todos los datos al modal de editar
  traerUnaExperiencia(id: number) {
    this.experienciaService.getExperiencia(id).subscribe(data => {
      this.experienciaService.experienciaModal = data;
    });
  }

  //Éste método permite eliminar una determinada experiencia, según el id.
  eliminarExp(id:number) {
    this.experienciaService.deleteExp(id).subscribe(data => {
      this.experienciaService.experienciaModal = data;
      alert("Tarjeta de Experiencia laboral eliminada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
