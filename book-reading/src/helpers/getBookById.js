export const getBookById = async( id ) => {

    try{
        const request = await fetch(`https://anapioficeandfire.com/api/books/${id}`);
    
        
        if (request.status === 200){
    
            const data = await request.json();

            return {

                isbn:data.isbn,
                authors:data.authors,
                country:data.country,
                mediaType:data.mediaType,
                name:data.name,
                pages:data.numberOfPages,
                lanzamiento:data.released,
                publisher:data.publisher

            }
    
        }
    
        return {
            books:[]
        }

    } catch(err){
        console.log(err)
    }

}
