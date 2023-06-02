import React, { useEffect } from 'react'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import { BookItem } from './BookItem';

export const BookList = () => {

  const {isLoading, books} = useFetchBooks();


  return (
   
    <div>

      <h1>Lista de Libros</h1>

      { 
        isLoading 
        ? <p> CARGANDO....</p>

        : <div>
            { books.map( book => ( 
              <BookItem key={book.name} {...book}></BookItem>
             ))}
        </div> 
      
      }


    </div>
    
  )
}
