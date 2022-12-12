import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  constructor(public educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  editarEducacion(){
    this.educacionService.updateEducation(this.educacionService.educacionModal).subscribe(data => {
      this.educacionService.educacionModal = data;
      alert("Educación modificada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }
}
