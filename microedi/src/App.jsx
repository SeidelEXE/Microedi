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
    </>
  )
}

export default App
