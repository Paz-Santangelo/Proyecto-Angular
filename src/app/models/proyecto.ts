export class Proyecto {
    id?:number;
    imgProyecto:string;
    nombreProyecto:string;
    descripcionProyecto:string;
    linkProyecto: string;

    constructor(imgProyecto:string, nombreProyecto:string, descripcionProyecto:string, linkProyecto:string){
        this.imgProyecto = imgProyecto;
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.linkProyecto = linkProyecto;
    }
}
