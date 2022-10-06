"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Gato = void 0;
var classAnimal_1 = require("./classAnimal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(paramNombre, paramPatas) {
        var _this = _super.call(this, paramPatas) || this;
        _this.nombre = paramNombre;
        return _this;
    }
    Gato.prototype.comer = function () {
        console.log("Ingreso al método: comer");
    };
    ;
    Gato.prototype.caminar = function (paramPatas) {
        console.log("Ingreso al m\u00E9todo caminar() con ".concat(paramPatas));
    };
    ;
    Gato.prototype.jugar = function (paramNombre) {
        console.log("".concat(paramNombre, " esta jugando"));
    };
    ;
    Gato.prototype.getNombre = function () {
        return this.nombre;
    };
    Gato.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    return Gato;
}(classAnimal_1.Animal));
exports.Gato = Gato;
//Colabo Dario & Co.
