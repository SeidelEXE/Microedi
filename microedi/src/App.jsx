import { useState } from 'react'
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Conteudo from './Componentes/Conteudo'
import Rodape from './Componentes/Rodape'


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
