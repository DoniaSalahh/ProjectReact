import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
import Work from '../Work/Work'

export default function MainLayout() {
    return<>
    <Navbar/>
    <Outlet/>
    <Info/>
    <Footer/>
    </>
}
