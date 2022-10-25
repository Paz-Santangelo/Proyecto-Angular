export class Proyecto {
    id?:number;
    imgProyecto:string;
    nombreProyecto:string;
    descripcionProyecto:string;
    link: string;

    constructor(imgProyecto:string, nombreProyecto:string, descripcionProyecto:string, link:string){
        this.imgProyecto = imgProyecto;
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.link = link;
    }
}
