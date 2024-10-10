import Cl_profesor from "./Cl_profesor.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

let profesor=new Cl_profesor();
let contratado=new Cl_contratado();
let contratado1=new Cl_contratado("Rafael",30,15);
let contratado2=new Cl_contratado("Felicia",30,20);

let salida = document.getElementById("salida");

salida.innerHTML=`
Nombre del profesor contratado: ${contratado1.nombre}
<br> Monto del bono: $${contratado1.bono}
<br> Cantidad de horas: ${contratado1.horas}
<br>Ingreso total del profesor ${contratado1.nombre}: $${contratado1.ingresocontratado()}
<br> <br>
<br>Nombre del profesor contratado: ${contratado2.nombre}
<br>Monto del bono: $${contratado2.bono}
<br>Cantidad de horas: ${contratado2.horas}
<br>Ingreso total del profesor ${contratado2.nombre}: $${contratado2.ingresocontratado()}
`

