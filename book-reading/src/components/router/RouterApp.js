import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from '../homepage/Homepage'
import { Navbar } from '../navbar/Navbar'

import { AddBook } from '../book/AddBook'
import { BookInfo } from '../book/BookInfo'
import { BookListFav } from '../book/BookListFav'


export const RouterApp = () => {
  return (

    <BrowserRouter>

        <Navbar></Navbar>


        <Routes>
          <Route path="/" element={ <Homepage/>} />  

          <Route path="addBook" element ={<AddBook/>} />
          <Route path="/detail/api/books/:id" element ={<BookInfo/>} />
          <Route path="/favorites" element ={<BookListFav/>} />
          {/* <Route path="/*" element={ <Navigate to ="/" />  } />   */}

        </Routes>
    </BrowserRouter>
  )
}
