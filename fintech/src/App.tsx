import styled from 'styled-components'
import { DataContextProvider } from './context/DataContext'
import ResumePage from './pages/ResumePage'
import SideNav from './pages/SideNav'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <DataContextProvider>
        <SideNav/>
        <main>
          <Header/>
          <ResumePage/>
        </main>
      </DataContextProvider>
    </>
  )
}

export default App
