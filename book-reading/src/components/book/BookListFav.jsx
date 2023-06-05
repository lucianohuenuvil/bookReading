import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Table } from './Table'

export const BookListFav = () => {

    const context = useContext(Context)

    const books = context.localBooks;

    const columns = [
      { Header: 'Code-ISBN', accessor: 'isbn' },
      { Header: 'Nombre', accessor: 'name' },
      { Header: 'Autor', accessor: 'authors' },
      { Header: 'Pais', accessor: 'country' },
      { Header: 'MediaType', accessor: 'mediaType' },
      { Header: 'Nro de Páginas', accessor: 'pages' },
      { Header: 'Fecha de lanzamiento', accessor: 'lanzamiento' },
      { Header: 'Editor', accessor: 'publisher' }
  
    ]


  return (
    <div  className='container mx-auto'>
      <h1 className="bg-blue-500 text-white p-3">Mis favoritos: </h1>
      <Table props={{books, columns}}></Table>
    </div>
  )
}
