import { useEffect, useState } from 'react'
import { getBooks } from '../helpers/getBooks';
import { getBookById } from '../helpers/getBookById';

export const useFetchBooks = (id = false) => {

    const [state, setState] = useState({
      isLoading: true,
      books:[]
    })

    
    const getBook = async () => {

        const books_request = await getBooks()


        if (books_request.length > 0){
          setTimeout( () => {
            setState({
              isLoading:false,
              books:books_request
            });

          }, 2000);
        } 
        
        else{
          setState({
            isLoading:false,
            books:[],
            error: "Ha ocurrido un error en la petición"
          });
        }
        
    }

    const getBookInfo = async() => {
      const books_request = await getBookById(id)
        
      if (books_request){
        setTimeout( () => {
          setState({
            isLoading:false,
            books:books_request
          });

        }, 1000);
      } else {
        setState({
          isLoading:false,
          books:[],
          error: "Ha ocurrido un error en la petición"
        });

      }

    }


    useEffect(() => {

      if(!id)
        getBook();
      else
        getBookInfo();

    }, [])
    

  return state
}
