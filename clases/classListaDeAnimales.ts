import { Animal } from "./classAnimal";

export class ListaDeAnimales {
    private animales: Animal[];

    constructor(paramAnimales:Animal[]){
        this.animales = paramAnimales
    }

    public buscar(animalBuscado:Animal):boolean{
        let auxiliar:number = 0;
        //Este "for" podría ser un "while"
        for (let i:number = 0; i <= this.animales.length; i++){
            if (animalBuscado === this.animales[i]){
                console.log("Se encontró una coincidencia");
                auxiliar = 1;
            }
        }
        //Este "if" con auxiliar soluciona el tema del retorno para frenar la búsqueda
        if (auxiliar === 1) {
            return true 
        } else{
            return false
        }
    } 
    public agregarAnimal(newAnimal:Animal):void{
        this.animales.push(newAnimal);
    }
    public removerAnimal(paramAnimal:Animal):void{
        for (let i:number = 0; i <= this.animales.length; i++){
            if (paramAnimal === this.animales[i]){
                this.animales.splice(i,1)
            }
        }
    }
}