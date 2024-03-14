import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import LogIn from './Components/User_Info/LogIn.jsx'
import Registration from './Components/User_Info/Registration.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'
import DashBoard from './Components/DashBoard/DashBoard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : "/:id",
        element : <DashBoard></DashBoard>
      }
    ]
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
      <ContextAPI>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
      </ContextAPI>
  </React.StrictMode>,
)
