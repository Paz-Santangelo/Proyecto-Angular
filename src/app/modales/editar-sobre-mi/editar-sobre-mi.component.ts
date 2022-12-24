import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent implements OnInit {

  //Se inyectan los servicios que se van a utilizar.
  constructor(public perfilService: PerfilService, public imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  
  editarPerfil(){
    /*
    Acá se obtiene la propiedad de imgCurso y valor del modal ubicado en el servicio de educación y se introduce la url obtenida de la imagen, 
    proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.
    */
    this.perfilService.perfilModal.imgPerfil = this.imagenesService.url;
    this.perfilService.updateProfile(this.perfilService.perfilModal).subscribe(data => {
      this.perfilService.perfilModal = data;
      alert("Perfil modificado exitosamente");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Perfil';
    this.imagenesService.uploadImage($event, name);
  }
}
