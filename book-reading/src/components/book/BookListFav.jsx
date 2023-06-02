import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Bookdetail } from './Bookdetail'

export const BookListFav = () => {

    const { book, setBook } = useContext(Context)

  return (
    <div>

        {
            book.map( books => (
                <Bookdetail key={books.name} {...books}></Bookdetail>
            )   
        )
        }



    </div>
  )
}
