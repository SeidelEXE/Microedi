import { useState } from 'react'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Conteudo from './Componentes/Conteudo'


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
    </>
  )
}

export default App
