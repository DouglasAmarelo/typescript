import $ from 'jquery';

import Livro from './modelo/livro';

const livro = new Livro('Dom Quixote', 108.8, 0.1);

console.log('@ Livro:', livro.precoComDesconto());

$('body').append(`<h1>Livro: ${livro.nome}</h1>`);
$('body').append(`<h2>Preço: ${livro.preco}</h2>`);
$('body').append(`<h3>Preço com desconto: ${livro.precoComDesconto()}</h3>`);
