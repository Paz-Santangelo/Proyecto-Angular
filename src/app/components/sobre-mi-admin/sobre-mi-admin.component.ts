import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { AuthService } from 'src/app/service/auth.service';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-sobre-mi-admin',
  templateUrl: './sobre-mi-admin.component.html',
  styleUrls: ['./sobre-mi-admin.component.css']
})
export class SobreMiAdminComponent implements OnInit {

  perfil: perfil[] = [];

  constructor(public perfilService: PerfilService, private authService: AuthService) { }

  estaLogueado: boolean = false;

  ngOnInit(): void {
    this.perfilService.getAllPerfil().subscribe(data => {this.perfil = data});

    if (this.authService.logIn) {
      this.estaLogueado = true;
    }else{
      this.estaLogueado = false;
    }
    
  }

  traerPerfil(id:string){
    this.perfilService.getProfile(id).subscribe(data => {
      this.perfilService.perfilModal = data;
    });
  }

}
