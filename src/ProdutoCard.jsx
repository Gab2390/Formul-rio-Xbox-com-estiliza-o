import React from 'react';
import styled from 'styled-components';

// 1. Estilização do Container Principal do Card
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

// 2. Estilização do Nome do Produto
const NomeProduto = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #212529;
  margin: 0 0 8px 0;
`;

// 3. Estilização do Preço do Produto
const PrecoProduto = styled.span`
  font-size: 1.1rem;
  color: #495057;
  font-weight: 600;
  margin-bottom: 16px;
`;

// 4. Estilização Dinâmica do Botão com base na prop 'adicionado'
const BotaoCarrinho = styled.button`
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')}; [cite: 1]
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

export function CardProduto({ nome, preco, adicionado, onToggleCarrinho }) {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>{preco}</PrecoProduto>
      <BotaoCarrinho adicionado={adicionado} onClick={onToggleCarrinho}>
        {adicionado ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
      </BotaoCarrinho>
    </CardContainer>
  );
}