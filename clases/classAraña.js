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
exports.Araña = void 0;
var classAnimal_1 = require("./classAnimal");
var Araña = /** @class */ (function (_super) {
    __extends(Araña, _super);
    function Araña(patas) {
        return _super.call(this, patas) || this;
    }
    Araña.prototype.comer = function () {
        console.log("Ingreso al método: comer");
    };
    ;
    Araña.prototype.caminar = function (patas) {
        console.log("Ingreso al m\u00E9todo caminar() con ".concat(patas));
    };
    ;
    return Araña;
}(classAnimal_1.Animal));
exports.Araña = Araña;
//Sergio & Erica Ft Daniel
