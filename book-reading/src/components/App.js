import React, { useEffect, useState } from 'react'
import { RouterApp } from './router/RouterApp'
import { Context } from './context/Context'

export const App = () => {


  const getBooksFav = () => {
    return JSON.parse(localStorage.getItem('books-fav')) || []
  }


  const [books, setBook] = useState(getBooksFav);


  useEffect(() => {
    localStorage.setItem('books-fav', JSON.stringify(books))
  }, [books])
  


  return (

      <Context.Provider value={{books, setBook}}>
          <RouterApp></RouterApp>
      </Context.Provider>
    
  )
}
