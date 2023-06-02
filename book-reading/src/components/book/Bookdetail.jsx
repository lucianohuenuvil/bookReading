import React from 'react'

export const Bookdetail = (books) => {


  return (
    <div>
        <p>  {books.name}</p>
        <p>
        {books.authors}

        </p>

    </div>
  )
}
