import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  //public values:Experiencias;

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    //this.values=this.experienciaService.experienciaModal;
    //console.log(this.values);
  }
  editarExp(){
    this.experienciaService.updateExp(this.experienciaService.experienciaModal).subscribe(datos => {
      this.experienciaService.experienciaModal = datos;
      alert("Experiencia modificada exitosamente");
      window.location.reload();
    });
  }

}
