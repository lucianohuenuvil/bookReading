export const getBooks = async (  ) => {


    const url = (url) => {

        const {pathname} = new URL(url)

        return pathname
    }


    try{
        const request = await fetch(`https://anapioficeandfire.com/api/books`);
    
        
        if (request.status === 200){
    
            const data = await request.json();
    
            const books =  data.map( book => {
                return {
                    name:book.name,
                    author:book.authors,
                    url: url(book.url)
                }
            })
            return books;
    
        }
    
        return {
            books:[]
        }

    } catch(err){
        console.log(err)
    }




} 
