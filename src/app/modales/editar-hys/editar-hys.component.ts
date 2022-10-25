import { Component, OnInit } from '@angular/core';
import { HySService } from 'src/app/service/HyS.service';

@Component({
  selector: 'app-editar-hys',
  templateUrl: './editar-hys.component.html',
  styleUrls: ['./editar-hys.component.css']
})
export class EditarHysComponent implements OnInit {

  constructor(public skillService: HySService) { }

  ngOnInit(): void {
  }

  editarHabilidad(){
    this.skillService.updateSkill(this.skillService.habilidadModal).subscribe(data => {
      this.skillService.habilidadModal = data;
      alert("Habilidad blanda modificada");
      window.location.reload();
    })
  }
}
