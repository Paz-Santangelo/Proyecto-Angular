import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion-admin',
  templateUrl: './educacion-admin.component.html',
  styleUrls: ['./educacion-admin.component.css']
})
export class EducacionAdminComponent implements OnInit {

  cursos: Educacion[] = [];
  isLogged: boolean = false;

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.educacionService.getAllEducaciones().subscribe(data => this.cursos = data);

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  traerEducacion(id:number){
    this.educacionService.getEducation(id).subscribe(data => {
      this.educacionService.educacionModal = data;
    }) 
  }

  eliminarEducacion(id:number) {
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
