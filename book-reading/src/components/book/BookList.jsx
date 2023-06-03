import React, { useEffect } from 'react'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import { Table } from './Table';




export const BookList = () => {

  const {isLoading, books} = useFetchBooks();

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Autor', accessor: 'author' },
    { Header: 'info', accessor: 'url' }

  ]

  
  return (

    <div>

      <h1>Lista de Libros: </h1>

      { 
        isLoading 
        ? <p> CARGANDO....</p>

        :  <Table props={{books, columns}}></Table>
      }

    </div>
    
  )
}
