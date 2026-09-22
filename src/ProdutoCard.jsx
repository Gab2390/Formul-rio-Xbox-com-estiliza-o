import React from 'react';
import styled from 'styled-components';

// Estilos com Styled Components
const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: sans-serif;
`;

const NomeProduto = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
`;

const PrecoProduto = styled.span`
  font-size: 1rem;
  color: #2b8a3e;
  font-weight: bold;
`;

const BotaoCarrinho = styled.button`
  /* Cor dinâmica baseada na prop 'adicionado' */
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default function ProdutoCard({ nome, preco, adicionado, aoAdicionar }) {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>R$ {preco}</PrecoProduto>
      <BotaoCarrinho adicionado={adicionado} onClick={aoAdicionar}>
        {adicionado ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}
      </BotaoCarrinho>
    </CardContainer>
  );
}
