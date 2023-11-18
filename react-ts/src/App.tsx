import React from 'react'
import Input from './components/Input'
import './App.css'

type Venda = {
  id: number;
  nome: string;
  preço: number;
  status: string;
}

function App() {
  const [start, setStart] = React.useState("")
  const [end, setEnd] = React.useState("")
  const [date, setDate] = React.useState<null | Venda[]>(null)

  React.useEffect(()=> {
    if(start !== "" && end !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)
      .then((response) => response.json())
      .then((json) => setDate(json as Venda[]))
      .catch((error) => console.log(error));
    }
  }, [start, end])

  return (
    <main>
      <div>
        <Input label="Início" type="date" value={start}
        setState={setStart}/>
        <Input label="Final" type="date" value={end}
        setState={setEnd}/>
      </div>

      <div className='flex-grow'>
        <p>Início: {start}</p>
        <p>Final: {end}</p>
      </div>

      <div>
        <ul>
          {date !== null && date.map(
            venda => <li key={venda.id}>
              {
                venda.id + 
                " - " +
                venda.nome + 
                " - " +
                venda.status 
              }
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}

export default App
