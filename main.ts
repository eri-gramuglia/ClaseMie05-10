//Special thx to Comision B

import { Animal } from "./clases/classAnimal"; 
import { Araña } from "./clases/classAraña";
import { Gato } from "./clases/classGato";
import { Pez } from "./clases/classPez";
import { ListaDeAnimales } from "./clases/classListaDeAnimales";

let gatito01 = new Gato ("Michi01", 5);
let gatito02 = new Gato ("Michi02", 4);
let puercoAraña01 = new Araña (8);
let puercoAraña02 = new Araña (6);
let pezLagarto01 = new Pez ("Nemo",0);
let pezLagarto02 = new Pez ("Dory",0);

let arregloDeAnimales:Animal[] = [gatito01, gatito02, puercoAraña01, puercoAraña02, pezLagarto01]

let nuestrosAnimales:ListaDeAnimales = new ListaDeAnimales(arregloDeAnimales);

let resultado:boolean = nuestrosAnimales.buscar(pezLagarto02);
console.log("Primera busqueda", resultado);

nuestrosAnimales.agregarAnimal(pezLagarto02);
resultado = nuestrosAnimales.buscar(pezLagarto02);
console.log("Segunda busqueda", resultado);

let consulta:number = arregloDeAnimales[3].getPatas();
console.log("Consulta devuelve", consulta);

//Gracias totales 😊