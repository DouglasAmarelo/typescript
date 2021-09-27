"use strict";
// Herança
// Por herança você consegue rastrear as hierarquias
// RealABC, também vai ser do tipo A e do tipo B.
// Classes
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    return RealA;
}());
var RealAB = /** @class */ (function () {
    function RealAB() {
    }
    RealAB.prototype.a = function () { };
    RealAB.prototype.b = function () { };
    return RealAB;
}());
var RealABC = /** @class */ (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
// Abstrações
var AbstrataABD = /** @class */ (function () {
    function AbstrataABD() {
    }
    AbstrataABD.prototype.a = function () { };
    AbstrataABD.prototype.b = function () { };
    return AbstrataABD;
}());
Object.prototype.log = function () {
    console.log(this.toString());
};
var x = 2;
var y = 3;
var z = 4;
x.log();
y.log();
z.log();
var cli = {
    nome: 'Douglas',
    toString: function () {
        return this.nome;
    },
};
cli.log();
//# sourceMappingURL=interfaces.js.map