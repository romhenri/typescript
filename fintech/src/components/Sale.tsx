import React from 'react'
import { IVenda } from '../context/DataContext';
import styled from 'styled-components';

const SaleDiv = styled.div`
  display: flex;
  justify-content: start;
  gap: 30px;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  background-color: var(--bg);
  border-radius: 10px;
  margin: auto;
  margin-bottom: 8px;
  box-sizing: border-box;

  a {
    color: var(--color1);
    font-family: monospace;
  }

  & .price {
    margin-left: auto;
  }
`

const Sale = ({sale}: {sale: IVenda}) => {
  return (
    <SaleDiv>
      <a href="">
        {sale.id}
      </a>

      <div>{sale.nome}</div>
      <div className='price'>
        {sale.preco.toLocaleString(
        'pt-BR', {style: 'currency', currency: 'BRL'}
        )}
      </div>

    </SaleDiv>
  )
}

export default Sale;