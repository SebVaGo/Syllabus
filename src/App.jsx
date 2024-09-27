import { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Formulario from './components/Formulario'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      
      <div class="contenedorprincipal">
        <SideBar/>
        <Formulario/>
      </div>

    </>
  )
}
