import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <section>
      <div>
       <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  )
}

export default App
