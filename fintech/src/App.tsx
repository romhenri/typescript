import styled from 'styled-components'
import { DataContextProvider } from './context/DataContext'
import SideNav from './pages/SideNav'
import Header from './components/Header'
import ResumePage from './pages/ResumePage'
import SalesPage from './pages/SalesPage'
import './App.css'

function App() {

  return (
    <>
      <DataContextProvider>
        <SideNav/>
        <main>
          <Header/>
          <ResumePage/>
          <SalesPage/>
        </main>
      </DataContextProvider>
    </>
  )
}

export default App
