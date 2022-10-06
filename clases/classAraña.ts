import { Animal } from "./classAnimal";

export class Araña extends Animal {
    constructor(patas:number) {
        super(patas);
    }
    public comer():void{
        console.log("Ingreso al método: comer");
        
    };
    public caminar(patas:number):void{
        console.log(`Ingreso al método caminar() con ${patas}`);
        
    };
}

//Sergio & Erica Ft Daniel