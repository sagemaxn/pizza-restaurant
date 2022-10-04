import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const Layout: React.FC = (props) => {
    return (
        <>
        <Navbar/>  
       {props.children}
       <Footer/>
        </>    
    )
}

export default Layout
