import { useState } from 'react'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Conteudo from './Componentes/Conteudo'
import CardBotoes from './Componentes/CardBotoes'

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
      <section>
        aqui vão os cards
      </section>
    </>
  )
}

export default App
