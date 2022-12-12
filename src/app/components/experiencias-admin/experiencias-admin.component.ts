import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/service/auth.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencias-admin',
  templateUrl: './experiencias-admin.component.html',
  styleUrls: ['./experiencias-admin.component.css']
})
export class ExperienciasAdminComponent implements OnInit {

  experiencias: Experiencias[] = [];
  isLogged: boolean = false;

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEperiencia();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEperiencia(): void {
    this.experienciaService.getAllExperiencias().subscribe(datos => this.experiencias = datos);
  }

  //Este metodo sirve para traer una determinada experiencia al hacer click en el icono del lapiz
  traerUnaExperiencia(id: number) {
    //console.log(id);
    this.experienciaService.getExperiencia(id).subscribe(data => {
      this.experienciaService.experienciaModal = data;
    });
  }

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
