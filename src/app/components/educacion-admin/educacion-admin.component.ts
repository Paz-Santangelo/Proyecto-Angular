import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-admin',
  templateUrl: './educacion-admin.component.html',
  styleUrls: ['./educacion-admin.component.css']
})
export class EducacionAdminComponent implements OnInit {

  cursos: Educacion[] = [];

  constructor(private educacionService: EducacionService, private authService: AuthService) { }

  ngOnInit(): void {
    this.educacionService.getAllEducaciones().subscribe(data => this.cursos = data);
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
    })
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
