// Herança
// Por herança você consegue rastrear as hierarquias
// RealABC, também vai ser do tipo A e do tipo B.

// Interfaces
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

// Classes
class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

// Abstrações
abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}

  abstract d(): void;
}

// Uso de interface para estender Object
// Serve apenas para checagem já que isso não estará no arquivo final
interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  nome: 'Douglas',
  toString() {
    return this.nome;
  },
};

cli.log();
