import React, { useEffect, useState } from 'react'
import { RouterApp } from './router/RouterApp'
import { Context } from './context/Context'

export const App = () => {


  const getBooksFav = () => {
    return JSON.parse(localStorage.getItem('books-fav')) || []
  }


  const [book, setBook] = useState(getBooksFav);


  useEffect(() => {
    localStorage.setItem('books-fav', JSON.stringify(book))
  }, [book])
  


  return (

      <Context.Provider value={{book, setBook}}>
          <RouterApp></RouterApp>
      </Context.Provider>
    
  )
}
