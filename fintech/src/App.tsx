import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DataContextProvider } from './context/DataContext';
import SideNav from './pages/SideNav'
import Header from './components/Header'
import ResumePage from './pages/ResumePage'
import SalesPage from './pages/SalesPage'
import SalePage from './pages/SalePage';
import './App.css'

function App() {
  return (
    <><DataContextProvider><Router>
          <SideNav/>
          <main>
            <Header/>
            <Routes>
              <Route index element={<ResumePage/>} />
              <Route 
                path="vendas"
              >
                <Route index element={<SalesPage/>} />
                <Route path=":id" element={<SalePage/>} />
              </Route>
            </Routes>
          </main>
    </Router></DataContextProvider></>
  )
}

export default App
