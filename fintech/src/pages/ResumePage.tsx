import { useData } from "../context/DataContext"
import styled from "styled-components";

const ResumeDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 15px;

  & h2 {
    font-weight: 400;
    font-size: 1rem;
  }
  
  & span {
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--color1);
  }

  & div {
    background-color: var(--bg);
    padding: 10px 20px;
    border-radius: 15px;
    flex-grow: 1;
    flex-basis: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`

const ResumePage = () => {
  const { data } = useData();

  return (
    <section>
      <ResumeDiv>
        <div>
          <h2>Vendas</h2>
          <span>
            {
            // Filter to only paid items
            data?.filter((i) => i.status !== "falha")
              // Sum all prices
              .reduce((acc, item) => acc + item.preco, 0)
              // Format to BRL
              .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            }
          </span>
        </div>
        <div>
          <h2>Recebidos</h2>
          <span>{
            // Filter to only paid items
            data?.filter((i) => i.status === "pago")
              // Sum all prices
              .reduce((acc, item) => acc + item.preco, 0)
              // Format to BRL
              .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
          }</span>
        </div>
        <div>
          <h2>Processando</h2>
          <span>{
            // Filter to only processing
            data?.filter((i) => i.status === "processando")
              // Sum all prices
              .reduce((acc, item) => acc + item.preco, 0)
              // Format to BRL
              .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
          }</span>
        </div>
      </ResumeDiv>
    </section>
  )
}

export default ResumePage