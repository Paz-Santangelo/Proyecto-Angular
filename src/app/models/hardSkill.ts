export class HardSkill {
    id?:number;
    porcentaje:any;
    nombre:string;

    constructor(porcentaje:any, nombreHyS:string){
        this.porcentaje = porcentaje;
        this.nombre = nombreHyS;
    }
}
