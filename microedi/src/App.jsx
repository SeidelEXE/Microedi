import { useState } from 'react'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Conteudo from './Componentes/Conteudo'
import Rodape from './Componentes/Rodape'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <section>
        <Conteudo />
      </section>
      <footer>
        <Rodape />
      </footer>
    </>
  )
}

export default App
