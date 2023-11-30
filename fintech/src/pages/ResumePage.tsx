import { ResponsiveContainer, CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend} from "recharts";
import { IVenda, useData } from "../context/DataContext"
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
const GraphDiv = styled.div`
  margin: 0px 15px;
  padding: 20px 20px 20px 0px;
  background-color: var(--bg);
  border-radius: 15px;
  flex-grow: 1;
  flex-basis: 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  & h2 {
    margin-bottom: 10px;
    padding-left: 25px;
  }
`

type SaleDay = {
  data: string,
  pago: number,
  processando: number,
  falha: number,
}

function transformData(data: IVenda[]): SaleDay[] {
  const days = data.reduce(
    (
      acc: {[key: string]: SaleDay}, item
    ) => {
    const day = item.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {})

  return Object.values(days);
}

const ResumePage = () => {
  const { data } = useData();
  let dataGraph: SaleDay[] | null = [];

  if (data) {
    dataGraph = transformData(data);
  };

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
      <GraphDiv>
      <h2>Gráfico de Vendas</h2>
      <ResponsiveContainer width="99%" height={400}>
        <LineChart
          data={dataGraph}>
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#d8d8d8" />

            <Line
              type="monotone"
              dataKey="processando"
              stroke="#dbb212"
            />

            <Line
              type="monotone"
              dataKey="pago"
              stroke="#387908"
            />
            
            <Line
              type="monotone"
              dataKey="falha"
              stroke="#a92828"
            />

        </LineChart>
      </ResponsiveContainer>
    </GraphDiv>
    </section>
  )
}

export default ResumePage