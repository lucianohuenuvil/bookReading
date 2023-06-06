import { getBookById } from "../helpers/getBookById";


describe("Prueba de getBooksById()", () => {


    test('Debe retornar un objeto de book', async() => {

        const book = await getBookById(1);

        expect(book).toEqual({
            isbn:expect.any(String),
            authors:expect.any(Array),
            country:expect.any(String),
            mediaType:expect.any(String),
            name:expect.any(String),
            pages:expect.any(Number),
            lanzamiento:expect.any(String),
            publisher:expect.any(String)
        })
    })
})