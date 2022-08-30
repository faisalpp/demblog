import React, { useState,useEffect } from 'react'
import { Header,MHeader } from './'

const Layout = ({children}) => {

  const [width,setWidth] = useState()

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
        console.log(window.innerHeight, window.innerWidth)
        setWidth(window.innerWidth)
    })
 }, [])

  return (
    <>
     {width <= 600 ?<MHeader/> : <Header/>}
     {children}
    </>
  )
}

export default Layout