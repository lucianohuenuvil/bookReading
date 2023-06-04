import React, { useEffect, useState } from 'react'
import { RouterApp } from './router/RouterApp'
import { Context } from './context/Context'
import '../index.css'

export const App = () => {


  const getBooksFav = () => {
    return JSON.parse(localStorage.getItem('books-fav')) || [];
  }


  const [localBooks, setLocalbooks] = useState(getBooksFav);


  useEffect(() => {
    localStorage.setItem('books-fav', JSON.stringify(localBooks))
  }, [localBooks])
  


  return (

    <div >

      <Context.Provider value={{localBooks, setLocalbooks}}>
          <RouterApp></RouterApp>
      </Context.Provider>

    </div>

    
  )
}
