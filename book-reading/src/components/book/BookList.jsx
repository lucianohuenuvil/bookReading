import React from 'react'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import { Table } from './Table';
import { Loading } from '../loading/Loading';
import { ErrorMessage } from '../loading/ErrorMessage';


export const BookList = () => {

  const {isLoading, books, error} = useFetchBooks();

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Autor', accessor: 'author' },
    { Header: 'info', accessor: 'url' }

  ]

  
  return (

    <div className='container mx-auto'>



      <h1 className="bg-blue-500 text-white p-3">Lista de Libros: </h1>

      { 
        isLoading 
        ? <Loading></Loading>

        :  <Table props={{books, columns}}></Table>
      }

      {
        error
        && <ErrorMessage></ErrorMessage>
      }     


    </div>
    
  )
}
