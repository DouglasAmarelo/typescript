import { ReactNode } from 'react';

type Componente = {
  new (...args: any[]): {
    render(): ReactNode;
  };
};

export default function logRender<C extends Componente>(componente: C) {
  return class extends componente {
    render() {
      console.log('Inicio renderização');
      const r: any = super.render();
      console.log('Fim renderização');

      return r;
    }
  };
}
