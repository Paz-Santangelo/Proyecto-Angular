import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  //Se inicializa el formulario.
  proyectoForm: FormGroup;

   //Se inyectan los servicios que se van a utilizar.
  constructor(private proyectosService: ProyectosService, private formBuilder: FormBuilder, public imagenesService: ImagenesService) {
    //Se crea el formulario, con sus propiedades y validaciones.
    this.proyectoForm = this.formBuilder.group({
      imgProyecto: ['', [Validators.required]],
      nombreProyecto: ['', [Validators.required]],
      descripcionProyecto: ['', [Validators.required]],
      linkProyecto: ['', [Validators.required]]
    })
   }

  ngOnInit(): void { 
  }

  get imgProyecto(){
    return this.proyectoForm.get("imgProyecto");
  }

  get nombreProyecto() {
    return this.proyectoForm.get("nombreProyecto");
  }

  get descripcionProyecto() {
    return this.proyectoForm.get("descripcionProyecto");
  }

  get linkProyecto() {
    return this.proyectoForm.get("linkProyecto");
  }

  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end.*/
  crearNuevoProyecto(): void {
    /*
    Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, 
    junto con los demás valores del formulario.
    */
    this.proyectoForm.value.imgProyecto = this.imagenesService.url;
    this.proyectosService.newProject(this.proyectoForm.value).subscribe(data => {
      alert("Nuevo proyecto agregado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Proyecto';
    this.imagenesService.uploadImage($event, name);
  }
}
