import { Animal } from "./classAnimal";
import { Mascota } from "./interfaceMascota";

export class Gato extends Animal implements Mascota{
    private nombre:string;

    constructor(paramNombre:string, paramPatas: number){
        super(paramPatas);
        this.nombre = paramNombre;
    }

    public comer():void{
        console.log("Ingreso al método: comer");
        
    };
    public caminar(paramPatas:number):void{
        console.log(`Ingreso al método caminar() con ${paramPatas}`);
    };
    public jugar(paramNombre:string):void{
        console.log(`${paramNombre} esta jugando`);
    };
    public getNombre():string{
        return this.nombre
    }
    public setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }
}

//Colabo Dario & Co.