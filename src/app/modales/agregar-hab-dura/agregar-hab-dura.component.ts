import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/models/hardSkill';
import { HardsSkillsService } from 'src/app/service/HardsSkills.service';

@Component({
  selector: 'app-agregar-hab-dura',
  templateUrl: './agregar-hab-dura.component.html',
  styleUrls: ['./agregar-hab-dura.component.css']
})
export class AgregarHabDuraComponent implements OnInit {

  porcentaje: number;
  nombre: string;

  constructor(private hardsService: HardsSkillsService) { }

  ngOnInit(): void {
  }

  crearHabilidadDura():void{
    const nuevaHabilidadDura = new HardSkill(this.porcentaje, this.nombre);
    this.hardsService.newHardSkill(nuevaHabilidadDura).subscribe(data => {
      alert("Nueva habilidad dura agregada");
      window.location.reload();
    })
  }

}
