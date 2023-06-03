import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Bookdetail } from './Bookdetail'
import { Table } from './Table'

export const BookListFav = () => {

    const { books } = useContext(Context)

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
    <Table props={{books, columns}}></Table>
  )
}
