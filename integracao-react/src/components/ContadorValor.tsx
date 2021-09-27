import React from 'react';

interface ContadorValorProps {
  contador: number;
}

const ContadorValor = ({ contador }: ContadorValorProps) => {
  return <p>{contador}</p>;
};

export default ContadorValor;
