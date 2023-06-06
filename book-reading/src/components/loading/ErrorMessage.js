import React from 'react'

export const ErrorMessage = () => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error 404!</strong>
        <br/>
        
        <span className="block sm:inline">Ha ocurrido un error en la petición.</span>

    </div>
  )
}
