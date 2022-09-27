import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/models/hys';
import { HySService } from 'src/app/service/HyS.service';

@Component({
  selector: 'app-agregar-hy-s',
  templateUrl: './agregar-hy-s.component.html',
  styleUrls: ['./agregar-hy-s.component.css']
})
export class AgregarHySComponent implements OnInit {

  porcentaje: number;
  nombre: string;

  constructor(private skillsService: HySService) { }

  ngOnInit(): void {
  }

  crearNewSkill():void{
    const nuevaHabilidad = new Hys(this.porcentaje, this.nombre);
    this.skillsService.newSkill(nuevaHabilidad).subscribe(data => {
      alert("Nueva habilidad agregada");
      window.location.reload();
    });
  }

}
