import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import { Context } from '../context/Context'

// console.log(useParams)
export const BookInfo = () => {

   
  const {id} = useParams()

  const {isLoading, books} = useFetchBooks(id);

  const {book, setBook} = useContext(Context)


  const addFav = () => {

    if (!book.includes(books)){
      setBook([...book, books])
      alert("Se ha agregado correctamente a la lista de favoritos")
    }
    else  
      alert("Este libro ya se encuentra en la lista de favoritos")
  }


  return (
    <div>
      
      { isLoading 
      ? <p>CARGANDO....</p>
      : <div>

        {books.name}
        {books.authors}
        {books.country}
        {books.lanzamiento}

        <button onClick={addFav}> Agregar a favoritos</button>


      </div> }
    </div>
  )
}
