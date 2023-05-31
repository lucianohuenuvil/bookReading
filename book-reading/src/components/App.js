import React, { useEffect } from 'react'
import { RouterApp } from './router/RouterApp'
import { Context } from './context/Context'

export const App = () => {

  // useEffect(() => {

  // }, [third])
  

  return (

      <Context.Provider >
          <RouterApp></RouterApp>
      </Context.Provider>
    
  )
}
