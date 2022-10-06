"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales(paramAnimales) {
        this.animales = paramAnimales;
    }
    ListaDeAnimales.prototype.buscar = function (animalBuscado) {
        var auxiliar = 0;
        //Este "for" podría ser un "while"
        for (var i = 0; i <= this.animales.length; i++) {
            if (animalBuscado === this.animales[i]) {
                console.log("Se encontró una coincidencia");
                auxiliar = 1;
            }
        }
        //Este "if" con auxiliar soluciona el tema del retorno para frenar la búsqueda
        if (auxiliar === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    ListaDeAnimales.prototype.agregarAnimal = function (newAnimal) {
        this.animales.push(newAnimal);
    };
    ListaDeAnimales.prototype.removerAnimal = function (paramAnimal) {
        for (var i = 0; i <= this.animales.length; i++) {
            if (paramAnimal === this.animales[i]) {
                this.animales.splice(i, 1);
            }
        }
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
