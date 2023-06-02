import React from 'react'
import { Link } from 'react-router-dom'

export const BookItem = (book) => {

  const {pathname} = new URL(book.url)

  return (
    <div>

        <Link className='link link-nav' to={`detail${pathname}`}>Ver Información</Link>

        {book.name}

    </div>
  )
}
