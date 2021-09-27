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
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
var casamento = new Data(); // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
var DataEsperta = /** @class */ (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
var casamentoEsperto = new DataEsperta(); // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // tb é public
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.precoComDesconto() + " (" + this.desconto * 100 + "% off)";
    };
    return Produto;
}());
var prod1 = new Produto('Caneta Bic Preta', 4.2);
prod1.desconto = 0.05;
console.log(prod1.resumo());
var prod2 = new Produto('Caderno Escolar', 18.8, 0.15);
console.log(prod2.resumo());
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('Ford', 'Ka', 185);
Array(50)
    // @ts-ignore
    .fill(0)
    .forEach(function () { return carro1.acelerar(); });
console.log(carro1.acelerar());
Array(40)
    // @ts-ignore
    .fill(0)
    .forEach(function () { return carro1.frear(); });
console.log(carro1.frear());
// simular "erros"
// carro1.velocidadeAtual = 300
// console.log('atual -> ' + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('máxima -> ' + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual)
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(modelo, velocidadeMaxima) {
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this;
        // ...
    }
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(20);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('F40', 324);
console.log(f40.marca + " " + f40.modelo);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
// Getters & Setters
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.areaCirc = function (raio) {
        return Matematica.PI * raio * raio;
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
// Classe abstrata
var Calculo = /** @class */ (function () {
    function Calculo() {
        this.resultado = 0;
    }
    Calculo.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculo;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t + a; });
    };
    return Soma;
}(Calculo));
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t * a; });
    };
    return Multiplicacao;
}(Calculo));
var c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
var Unico = /** @class */ (function () {
    function Unico() {
    }
    Unico.getInstance = function () {
        return Unico.instance;
    };
    Unico.prototype.agora = function () {
        return new Date();
    };
    Unico.instance = new Unico();
    return Unico;
}());
// const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente Leitura
var Aviao = /** @class */ (function () {
    function Aviao(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    return Aviao;
}());
var turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map