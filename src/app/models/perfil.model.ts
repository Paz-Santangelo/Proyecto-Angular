export class perfil{
    id?:number;
    imgPerfil: string;
    nombreCompleto: string;
    titulo:string;
    acerca: string;

    constructor(imgPerfil:string, nombreCompleto:string, titulo:string, acerca: string) {
        this.imgPerfil = imgPerfil;
        this.nombreCompleto = nombreCompleto;
        this.titulo = titulo;
        this.acerca = acerca;
    }
}