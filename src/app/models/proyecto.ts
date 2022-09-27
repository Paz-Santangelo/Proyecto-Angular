export class Proyecto {
    id?:number;
    imgProyecto:string;
    nombreProyecto:string;
    descripcionProyecto:string;

    constructor(imgProyecto:string, nombreProyecto:string, descripcionProyecto:string){
        this.imgProyecto = imgProyecto;
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
    }
}
