export class Educacion {
    id?:number;
    imgCurso:string;
    tituloCurso:string;
    anio:string;
    descripcionCurso:string;

    constructor(imgCurso:string, tituloCurso:string, anio:string, descripcionCurso:string){
        this.imgCurso = imgCurso;
        this.tituloCurso = tituloCurso;
        this.anio = anio;
        this.descripcionCurso = descripcionCurso;
    }
}
