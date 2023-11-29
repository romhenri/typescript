import { useNavigate, useParams } from 'react-router-dom';
import { IVenda } from '../context/DataContext';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

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
  cursor: pointer;
  
  &:hover {
    transition: all .2s;
    background-color: var(--color7);
  }
  & p {
    font-family: monospace;
  }
  & .price {
    margin-left: auto;
  }
`

const Sale = ({sale}: {sale: IVenda}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {data, loading} = useFetch<IVenda>(`
    https://data.origamid.dev/vendas/${id}
  `)

  return (
      <SaleDiv 
        onClick={() => {navigate(`/vendas/${sale.id}`)}}
      >
        <p>{sale.id}</p>

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