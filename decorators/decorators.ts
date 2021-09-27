function logarClasse(construtor: Function) {
  console.log(construtor);
}

// Factory Function que retorna um @Decorator
function decoratorVazio(_: Function) {}

function logarClasseSe(value: boolean) {
  return value ? logarClasse : decoratorVazio;
}

function decorator({ a, b }: { a: string; b?: number }) {
  return (_: Function): void => console.log(`${a} - ${b}`);
}

// MOvida para baixo para o segundo exemplo
// class Eletrodomestico {...}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
  console.log('\n\n');
  console.log('---- logarObjeto ----');

  console.log('Carregado uma única vez');

  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...');

      super(...args);

      console.log('Depois....', '\n\n');
    }
  };
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
  imprimir?(): void;
}

// @logarClasse
// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(true)
// @logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('class Eletrodomestico: Novo...');
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log('\n\n');
    console.log('---- imprimivel ----');
    console.log('@imprimivel', this);
  };
}

const eletrodomestico = new Eletrodomestico();

eletrodomestico?.imprimir && eletrodomestico.imprimir();
eletrodomestico?.imprimir && eletrodomestico.imprimir();
eletrodomestico?.imprimir && eletrodomestico.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false,
};

// @perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!');
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);

      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissão');
      }
    }
  };
}

// Decorator de método
class ContaCorrente {
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(@paramInfo valor: number) {
    // Comentado por conta do teste com o
    // decorator @naoNegativo no saldo
    // if (valor > this.saldo) return false;

    this.saldo -= valor;
    return true;
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(10248.57);
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
function congelar(
  alvo: any,
  nomeMetodo: string,
  descritor: PropertyDescriptor // Parâmetro nativo do JS
) {
  console.log('\n\n');
  console.log('---- congelar ----');
  console.log('@alvo:', alvo);
  console.log('@nomeMetodo:', nomeMetodo);

  descritor.writable = false;
}

// Decorator de ATRIBUTO
function naoNegativo(alvo: any, nomePropriedade: string) {
  // Deletando a propriedade para poder
  // redefinir com as alterações que quisermos
  delete alvo[nomePropriedade];

  // Criando a propriedade com o mesmo nome da que foi deletada
  // Assim é possível fazer as customizações que quisermos
  Object.defineProperty(alvo, nomePropriedade, {
    get: (): any => {
      return alvo[`_${nomePropriedade}`];
    },
    set: (valor: any): void => {
      if (valor < 0) {
        throw new Error('Saldo inválido');
      } else {
        alvo[`_${nomePropriedade}`] = valor;
      }
    },
  });
}

// Decorator de PARÂMETRO
// Nesse decorator não temos acesso ao valor do parâmetro.
// Mas temos acesso ao nome do método, a classe associoada, ao índice do parâmetro
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log('\n\n');
  console.log('---- paramInfo ----');
  console.log('@alvo:', alvo);
  console.log('@nomeMetodo:', nomeMetodo);
  console.log('@indiceParam:', indiceParam);
}
