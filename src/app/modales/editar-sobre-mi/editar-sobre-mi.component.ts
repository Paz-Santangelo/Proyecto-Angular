import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent implements OnInit {

  constructor(public perfilService: PerfilService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  editarPerfil(){
    this.perfilService.perfilModal.imgPerfil = this.imagenesService.url;
    this.perfilService.updateProfile(this.perfilService.perfilModal).subscribe(data => {
      this.perfilService.perfilModal = data;
      alert("Perfil modificado exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  uploadImage($event: any) {
    const name = 'Perfil';
    this.imagenesService.uploadImage($event, name);
  }
}
