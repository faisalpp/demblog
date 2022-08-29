import React, { useState,useEffect } from 'react'
import { Header,MHeader } from './'
import { useWindowWidth } from '@react-hook/window-size'

const Layout = ({children}) => {

 const width = useWindowWidth();
 console.log(width)

  return (
    <>
     {width < 600 ? <MHeader/> : <Header/>} 
     {children}
    </>
  )
}

export default Layout