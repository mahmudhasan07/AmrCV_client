import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'

function App() {

  return (
    <section>
      <div>
       {/* <NavBar></NavBar> */}
      </div>
      <div>
        <Home></Home>
      </div>
    </section>
  )
}

export default App
