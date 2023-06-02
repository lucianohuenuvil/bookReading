export const getBooks = async (  ) => {


    try{
        const request = await fetch(`https://anapioficeandfire.com/api/books`);
    
        
        if (request.status === 200){
    
            const data = await request.json();
    
            const books =  data.map( book => {
                return {
                    name:book.name,
                    url:book.url
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
