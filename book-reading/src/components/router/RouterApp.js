import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {Homepage} from '../homepage/Homepage'
import { Navbar } from '../navbar/Navbar'

export const RouterApp = () => {
  return (

    <BrowserRouter>

        <Navbar></Navbar>


        <Routes>
          <Route path="/" element={ <Homepage/>} />  

          {/* <Route path="categories" element ={<Categories/>} /> */}
          <Route path="/*" element={ <Navigate to ="/" />  } />  

        </Routes>
    </BrowserRouter>
  )
}
