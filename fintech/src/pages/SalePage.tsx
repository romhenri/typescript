import { useNavigate, useParams } from 'react-router-dom';
import { IVenda } from '../context/DataContext';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const SaleDiv = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  flex-direction: column;
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
  background-color: var(--bg);
  border-radius: 10px;
  margin: 10px 15px;
  margin-bottom: 8px;
  box-sizing: border-box;
  cursor: pointer;
  
  & p {
    text-align: start;
    text-align: left;
  }
  & hr {
    width: 100%;
    margin: 0px;
  }
`

function makeFirstLetterCapital(word: string) {
  return word
  // Get the first letter and capitalize it
  .charAt(0).toUpperCase()
  // Get the rest of the word without first letter
  + word.slice(1);
}

const Sale = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {data, loading} = useFetch<IVenda>(`
    https://data.origamid.dev/vendas/${id}
  `)

  if(!data) return null;
  return (
      <SaleDiv 
        onClick={() => {navigate(`/vendas/${data.id}`)}}
      >
        <p>
          <strong>ID:</strong> {data.id}
        </p>
        <hr />
        <p>
          <strong>Nome:</strong> {data.nome}
        </p>
        <hr />
        <p>
          <strong>Status:</strong> {makeFirstLetterCapital(data.status)}
        </p>
        <hr />
        <p className='price'>
            <strong>Valor: </strong>
            {data.preco.toLocaleString(
            'pt-BR', {style: 'currency', currency: 'BRL'}
            )}
        </p>
        <hr />
        <p>
          <strong>Pagamento: </strong> 
          {
            makeFirstLetterCapital(data.pagamento)
          }
        </p>
        <hr />
        <p>
          <strong>Parcelas: </strong> 
          {
            data.parcelas ? data.parcelas : 'Sem parcelas'
          }
        </p>
      </SaleDiv>
  )
}

export default Sale;