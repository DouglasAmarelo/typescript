"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Sem usar Generics
var echo = function (value) { return value; };
console.log('echo:', echo('Douglas').length);
console.log('echo:', echo(30).length);
console.log('echo:', echo({ name: 'Douglas', age: 30 }));
console.log('\n');
// Usando Generics
var betterEcho = function (value) { return value; };
console.log('betterEcho:', betterEcho('Douglas').length);
console.log('betterEcho:', betterEcho(30));
console.log('betterEcho:', betterEcho({ name: 'Douglas', age: 30 }));
console.log('\n');
// Generics disponíveis na API
// Você pode fazer uso do `Generics` para especificar o tipo de dados que você quer.
// Nesse exemplo, a classe `Array`, foi definida com o tipo `Generics` e,
// na hora de usar, você especifica o tipo de dados que você espera receber.
var avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // Vai gerar erro porque o tipo esperado é numérico
console.log('avaliacoes:', avaliacoes); // (4) [10, 9.3, 7.7, 8.4]
console.log('\n');
// Array
// Função que recebbe um tipo generic
var imprimir = function (args) {
    args.forEach(function (item) { return console.log('imprimir:', item); });
};
imprimir([1, 2, 3, 4, 5]); // Tipagem por inferência
imprimir([6, 7, 8]); // Tipagem explicita
imprimir(['Douglas', 'Jéssica', 'Guilherme', 'Bru']);
// Pasando um tipo mais complexo: objeto
imprimir([
    { name: 'Douglas', age: 30 },
    { name: 'Jéssica', age: 29 },
]);
imprimir([
    { name: 'Douglas', age: 30 },
    { name: 'Jéssica', age: 29 },
]);
console.log('\n');
// Função
var chamarEcho = betterEcho;
console.log('chamarEcho:', chamarEcho('Olá mundo!'));
var chamarEcho2 = betterEcho;
console.log('chamarEcho2:', chamarEcho2(999999999));
console.log('\n');
// Classe com Generics
var OperacaoBinaria = /** @class */ (function () {
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    return OperacaoBinaria;
}());
// console.log(new OperacaoBinaria('Bom', 'dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'opa').executar());
// console.log(new OperacaoBinaria({}, {}).executar());
var SomaBinaria = /** @class */ (function (_super) {
    __extends(SomaBinaria, _super);
    function SomaBinaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomaBinaria.prototype.executar = function () {
        return this.operando1 + this.operando2;
    };
    return SomaBinaria;
}(OperacaoBinaria));
console.log('SomaBinaria:', new SomaBinaria(3, 7).executar());
console.log('\n');
var DiferencaEntreDatas = /** @class */ (function (_super) {
    __extends(DiferencaEntreDatas, _super);
    function DiferencaEntreDatas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiferencaEntreDatas.prototype.getTime = function (_a) {
        var dia = _a.dia, mes = _a.mes, ano = _a.ano;
        return new Date(mes + "/" + dia + "/" + ano).getTime();
    };
    DiferencaEntreDatas.prototype.executar = function () {
        var tempo1 = this.getTime(this.operando1);
        var tempo2 = this.getTime(this.operando2);
        var diferenca = Math.abs(tempo1 - tempo2);
        var dia = 1000 * 60 * 60 * 24; // Milissegundos, segundos, minutos, hora
        var resultado = Math.ceil(diferenca / dia);
        return resultado + " " + (resultado === 1 ? 'dia' : 'dias');
    };
    return DiferencaEntreDatas;
}(OperacaoBinaria));
var dia1 = new Data(1, 2, 2020);
var dia2 = new Data(3, 2, 2020);
console.log('DiferencaEntreDatas:', new DiferencaEntreDatas(dia1, dia2).executar());
// Desafio Classe Fila
// Atributi: fila (Array)
// Métodos: entrar, próximo, imprimir
var Fila = /** @class */ (function () {
    function Fila() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.fila = args;
    }
    Fila.prototype.entrar = function (elemento) {
        this.fila.push(elemento);
    };
    Fila.prototype.proximo = function () {
        var primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro || null;
    };
    Fila.prototype.imprimir = function () {
        console.log(this.fila);
    };
    return Fila;
}());
var fila = new Fila('Jéssica', 'Gustavo', 'Guilherme', 'Bruno', 'Will');
fila.imprimir();
fila.entrar('Pedrinho');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
var Mapa = /** @class */ (function () {
    function Mapa() {
        this.itens = new Array();
    }
    Mapa.prototype.obter = function (key) {
        var result = this.itens.filter(function (item) { return item.key === key; })[0];
        return result || null;
    };
    Mapa.prototype.colocar = function (_a) {
        var key = _a.key, value = _a.value;
        var elementExists = this.obter(key);
        if (elementExists) {
            elementExists.value = value;
        }
        else {
            this.itens.push({ key: key, value: value });
        }
    };
    Mapa.prototype.limpar = function () {
        this.itens = new Array();
    };
    Mapa.prototype.imprimir = function () {
        console.log(this.itens);
    };
    return Mapa;
}());
var mapa = new Mapa();
mapa.colocar({ key: 1, value: 'Pedro' });
mapa.colocar({ key: 2, value: 'Rebeca' });
mapa.colocar({ key: 3, value: 'Maria' });
mapa.colocar({ key: 1, value: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map