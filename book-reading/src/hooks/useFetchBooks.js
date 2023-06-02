import React, { useEffect, useState } from 'react'
import { getBooks } from '../helpers/getBooks';
import { getBookById } from '../helpers/getBookById';

export const useFetchBooks = (id = false) => {

    const [state, setState] = useState({
      isLoading: true,
      books:[]
    })

    
    const getBook = async () => {

        const books_request = await getBooks()

          setTimeout( () => {
  
            setState({
              isLoading:false,
              books:books_request
            });
  
        }, 2000);
        
    }

    const getBookInfo = async() => {
      const books_request = await getBookById(id)

      setTimeout( () => {

        setState({
          isLoading:false,
          books:books_request
        });

    }, 1000);

    }


    useEffect(() => {

      if(!id)
        getBook();
      else
        getBookInfo();

    }, [])
    

  return state
}
