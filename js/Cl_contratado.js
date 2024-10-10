import Cl_profesor from "./Cl_profesor.js";
export default class Cl_contratado extends Cl_profesor {
    constructor (nombre, bono, horas){
        super(nombre, bono, horas);
        this.horas = horas;
    }
    ingresocontratado(){
        return this.bono + (this.horas*10);
    }
}