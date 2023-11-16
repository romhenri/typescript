import React from 'react'
import Input from './components/Input'
import './App.css'

function App() {
  const [start, setStart] = React.useState("")
  const [end, setEnd] = React.useState("")

  return (
    <main>
      <div>
        <Input label="Início" type="date" value={start}
        setState={setStart}/>
        <Input label="Final" type="date" value={end}
        setState={setEnd}/>
      </div>

      <div>
        <p>Início: {start}</p>
        <p>Final: {end}</p>
      </div>
    </main>
  )
}

export default App
