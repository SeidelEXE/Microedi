import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Rodape from './Componentes/Rodape'
import Home from './Rotas/Home'
import QuemSomos from './Rotas/QuemSomos'
import Servicos from './Rotas/Servicos'
import Contato from './Rotas/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <header>
            <Cabecalho />
          </header>
          
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/quemsomos' element={ <QuemSomos /> }/>
            <Route path='/servicos' element={ <Servicos /> }/>
            <Route path='/contato' element={ <Contato /> }/>
          </Routes>

          <footer>
            <Rodape />
          </footer>
      </Router>
    </>
  )
}

export default App
