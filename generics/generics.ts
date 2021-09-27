// Sem usar Generics
const echo = (value: any) => value;

console.log('echo:', echo('Douglas').length);
console.log('echo:', echo(30).length);
console.log('echo:', echo({ name: 'Douglas', age: 30 }));

console.log('\n');

// Usando Generics
const betterEcho = <T>(value: T): T => value;

console.log('betterEcho:', betterEcho('Douglas').length);
console.log('betterEcho:', betterEcho<number>(30));
console.log('betterEcho:', betterEcho({ name: 'Douglas', age: 30 }));

console.log('\n');

// Generics disponíveis na API
// Você pode fazer uso do `Generics` para especificar o tipo de dados que você quer.
// Nesse exemplo, a classe `Array`, foi definida com o tipo `Generics` e,
// na hora de usar, você especifica o tipo de dados que você espera receber.
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // Vai gerar erro porque o tipo esperado é numérico

console.log('avaliacoes:', avaliacoes); // (4) [10, 9.3, 7.7, 8.4]

console.log('\n');

// Array
// Função que recebbe um tipo generic
const imprimir = <T>(args: T[]) => {
  args.forEach(item => console.log('imprimir:', item));
};

imprimir([1, 2, 3, 4, 5]); // Tipagem por inferência

imprimir<number>([6, 7, 8]); // Tipagem explicita

imprimir<string>(['Douglas', 'Jéssica', 'Guilherme', 'Bru']);

// Pasando um tipo mais complexo: objeto
imprimir<{ name: string; age: number }>([
  { name: 'Douglas', age: 30 },
  { name: 'Jéssica', age: 29 },
]);

// Criando um tipo e usando o tipo
type Aluno = { name: string; age: number };

imprimir<Aluno>([
  { name: 'Douglas', age: 30 },
  { name: 'Jéssica', age: 29 },
]);

console.log('\n');

// Função
const chamarEcho: <T>(data: T) => T = betterEcho;
console.log('chamarEcho:', chamarEcho<string>('Olá mundo!'));

// Criando um tipo e usando o tipo
type Echo = <T>(data: T) => T;
const chamarEcho2: Echo = betterEcho;
console.log('chamarEcho2:', chamarEcho2<number>(999999999));

console.log('\n');

// Classe com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom', 'dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'opa').executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log('SomaBinaria:', new SomaBinaria(3, 7).executar());

console.log('\n');

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime({ dia, mes, ano }: Data): number {
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const tempo1 = this.getTime(this.operando1);
    const tempo2 = this.getTime(this.operando2);
    const diferenca = Math.abs(tempo1 - tempo2);
    const dia = 1000 * 60 * 60 * 24; // Milissegundos, segundos, minutos, hora

    const resultado = Math.ceil(diferenca / dia);

    return `${resultado} ${resultado === 1 ? 'dia' : 'dias'}`;
  }
}

const dia1 = new Data(1, 2, 2020);
const dia2 = new Data(3, 2, 2020);

console.log(
  'DiferencaEntreDatas:',
  new DiferencaEntreDatas(dia1, dia2).executar()
);

// Desafio Classe Fila
// Atributi: fila (Array)
// Métodos: entrar, próximo, imprimir
class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T) {
    this.fila.push(elemento);
  }

  proximo(): T | null {
    const primeiro = this.fila[0];
    this.fila.splice(0, 1);
    return primeiro || null;
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>(
  'Jéssica',
  'Gustavo',
  'Guilherme',
  'Bruno',
  'Will'
);

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

// Desafio Mapa
// Array de Objetos (chave/valor) -> items
// Métodos: Obter(chave), colocar({ c, v })
// limpar(), imprimir()

type KeyValue<K, V> = {
  key: K;
  value: V;
};

class Mapa<K, V> {
  private itens: Array<KeyValue<K, V>> = new Array<KeyValue<K, V>>();

  obter(key: K): KeyValue<K, V> | null {
    const [result] = this.itens.filter(item => item.key === key);
    return result || null;
  }

  colocar({ key, value }: KeyValue<K, V>) {
    const elementExists = this.obter(key);

    if (elementExists) {
      elementExists.value = value;
    } else {
      this.itens.push({ key, value });
    }
  }

  limpar() {
    this.itens = new Array<KeyValue<K, V>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();

mapa.colocar({ key: 1, value: 'Pedro' });
mapa.colocar({ key: 2, value: 'Rebeca' });
mapa.colocar({ key: 3, value: 'Maria' });
mapa.colocar({ key: 1, value: 'Gustavo' });

console.log(mapa.obter(2));

mapa.imprimir();
mapa.limpar();
mapa.imprimir();
