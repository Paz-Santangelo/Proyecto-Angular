import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/models/hardSkill';
import { HardsSkillsService } from 'src/app/service/HardsSkills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hards-skills',
  templateUrl: './hards-skills.component.html',
  styleUrls: ['./hards-skills.component.css']
})
export class HardsSkillsComponent implements OnInit {

  //Se llama al modelo HardSkill, el cual es un array.
  habilidadesDuras: HardSkill[] = []; 
  //Se creó esta variable, de tipo booleano, para utilizarla en los botones de edición.
  isLogged: boolean = false;

  //Se inyectan los servicios que se van a utilizar
  constructor(private hardsService: HardsSkillsService, private tokenService: TokenService) { }

  ngOnInit(): void {
    /*Esta función trae toda la información proveniente de la base de datos, la cual pasa primero por el back-end
    y luego, por el servicio de experiencia, hasta llegar a la vista.
    */
    this.hardsService.getAllHS().subscribe(data => this.habilidadesDuras = data);

    /*
    Esta condicional establece que, si se obtiene el token, entonces el usuario está logueado, caso contrario
    no lo está. Lo cual permite que aparezcan los botones, usando la variable booleana anteriormente mencionada.
    */
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //Este método sirve para obtener el id de una determinada habilidad dura al hacer click en el ícono del lápiz y así, mandar todos los datos al modal de editar
  traerHabilidadDura(id: number) {
    this.hardsService.getHardSkill(id).subscribe(data => {
      console.log(data);
      this.hardsService.modalHards = data;
    })
  }

  //Éste método permite eliminar una determinada habilidad dura, según el id.
  eliminarHabilidadDura(id:number){
    this.hardsService.deleteHard(id).subscribe(data => {
      this.hardsService.modalHards = data;
      alert("Tarjeta de habilidad dura eliminada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

}
