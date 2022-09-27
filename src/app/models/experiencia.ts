export class Experiencias {
    id?:number;
    imgExperiencia:string;
    puesto:string;
    anio:string;
    descripcionTrabajo:string;

    constructor(imgExperiencia:string, puesto:string, anio:string, descripcionTrabajo:string){
        this.imgExperiencia = imgExperiencia;
        this.puesto = puesto;
        this.anio = anio,
        this.descripcionTrabajo = descripcionTrabajo;
    }
}
