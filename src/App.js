import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Work from './Components/Work/Work'
import Info from './Components/Info/Info'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { RouterProvider,createBrowserRouter, createHashRouter } from 'react-router-dom'
import MainLayout from './Components/Layout/MainLayout'
import NotFound from './Components/Not Found/NotFound'
export default function App() {
    let routes=createHashRouter([
    {path: '/', element: <MainLayout/>,children:[
      {index: true, element: <Work/>},
      {path: 'about', element: <About/>},
      {path: 'portfolio', element: <Portfolio/>},
      {path: 'contact', element: <Contact/>},
      {path: '*', element: <NotFound/>},

    ]},
  ])
  return <>
  <RouterProvider router={routes}/>
  </>
}