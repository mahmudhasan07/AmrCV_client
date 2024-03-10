import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import LogIn from './Components/User_Info/LogIn.jsx'
import Registration from './Components/User_Info/Registration.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/login",
    element: <LogIn></LogIn>
  },
  {
    path: '/registration',
    element: <Registration></Registration>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ContextAPI>
        <App />
      </ContextAPI>
    </RouterProvider>
  </React.StrictMode>,
)
