import { useState } from 'react'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <div id='conteudo'>
        <section>
          <h1>
          Informática e tecnologia,
          tudo em um só lugar</h1>
        </section>
      </div>
    </>
  )
}

export default App
