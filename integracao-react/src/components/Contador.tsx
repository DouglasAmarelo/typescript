import React, { Component } from 'react';
import logRender from '../decorators/LogRender';
import ContadorValor from './ContadorValor';

interface ContadorProps {
  valorInicial: number;
}

interface ValorProps {
  valor: number;
}

@logRender
class Contador extends Component<ContadorProps, ValorProps> {
  state = { valor: this.props.valorInicial };

  private calcular = (delta: number) => {
    this.setState({ valor: this.state.valor + delta });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.calcular(-10)}>(-) Diminuir</button>
        <ContadorValor contador={this.state.valor} />
        <button onClick={() => this.calcular(10)}>(+) Aumentar</button>
      </div>
    );
  }
}

export default Contador;
