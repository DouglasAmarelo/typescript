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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
function logarClasse(construtor) {
    console.log(construtor);
}
// Factory Function que retorna um @Decorator
function decoratorVazio(_) { }
function logarClasseSe(value) {
    return value ? logarClasse : decoratorVazio;
}
function decorator(_a) {
    var a = _a.a, b = _a.b;
    return function (_) { return console.log(a + " - " + b); };
}
function logarObjeto(construtor) {
    console.log('\n\n');
    console.log('---- logarObjeto ----');
    console.log('Carregado uma única vez');
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            console.log('Antes...');
            _this = _super.apply(this, args) || this;
            console.log('Depois....', '\n\n');
            return _this;
        }
        return class_1;
    }(construtor));
}
// @logarClasse
// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(true)
// @logarObjeto
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico() {
        console.log('class Eletrodomestico: Novo...');
    }
    Eletrodomestico = __decorate([
        imprimivel
    ], Eletrodomestico);
    return Eletrodomestico;
}());
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log('\n\n');
        console.log('---- imprimivel ----');
        console.log('@imprimivel', this);
    };
}
var eletrodomestico = new Eletrodomestico();
((_a = eletrodomestico) === null || _a === void 0 ? void 0 : _a.imprimir) && eletrodomestico.imprimir();
((_b = eletrodomestico) === null || _b === void 0 ? void 0 : _b.imprimir) && eletrodomestico.imprimir();
((_c = eletrodomestico) === null || _c === void 0 ? void 0 : _c.imprimir) && eletrodomestico.imprimir();
// Desafio Decorator perfilAdmin
var usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false,
};
// @perfilAdmin
var MudancaAdministrativa = /** @class */ (function () {
    function MudancaAdministrativa() {
    }
    MudancaAdministrativa.prototype.critico = function () {
        console.log('Algo crítico foi alterado!');
    };
    return MudancaAdministrativa;
}());
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão');
            }
            return _this;
        }
        return class_2;
    }(construtor));
}
// Decorator de método
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(saldo) {
        this.saldo = saldo;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        // Comentado por conta do teste com o
        // decorator @naoNegativo no saldo
        // if (valor > this.saldo) return false;
        this.saldo -= valor;
        return true;
    };
    ContaCorrente.prototype.getSaldo = function () {
        return this.saldo;
    };
    __decorate([
        naoNegativo
    ], ContaCorrente.prototype, "saldo", void 0);
    __decorate([
        congelar,
        __param(0, paramInfo)
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    return ContaCorrente;
}());
var cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57); // Zerando a conta
// cc.sacar(0.1); // Forçando um saque maior que o saldo para testarmos o decorator @naoNegativo
console.log(cc.getSaldo());
// Nesse exemplo a função getSaldo está sendo reescrita
// para que o saldo seja maior (introduzindo um bug)
// cc.getSaldo = function () {
//   return this['saldo'] + 7000;
// };
// console.log(cc.getSaldo());
// Decorator de MÉTODO
// Decorator para impedir a subescrição do método
// Baseado no Object.freeze()
function congelar(alvo, nomeMetodo, descritor // Parâmetro nativo do JS
) {
    console.log('\n\n');
    console.log('---- congelar ----');
    console.log('@alvo:', alvo);
    console.log('@nomeMetodo:', nomeMetodo);
    descritor.writable = false;
}
// Decorator de ATRIBUTO
function naoNegativo(alvo, nomePropriedade) {
    // Deletando a propriedade para poder
    // redefinir com as alterações que quisermos
    delete alvo[nomePropriedade];
    // Criando a propriedade com o mesmo nome da que foi deletada
    // Assim é possível fazer as customizações que quisermos
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        },
    });
}
// Decorator de PARÂMETRO
// Nesse decorator não temos acesso ao valor do parâmetro.
// Mas temos acesso ao nome do método, a classe associoada, ao índice do parâmetro
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log('\n\n');
    console.log('---- paramInfo ----');
    console.log('@alvo:', alvo);
    console.log('@nomeMetodo:', nomeMetodo);
    console.log('@indiceParam:', indiceParam);
}
//# sourceMappingURL=decorators.js.map