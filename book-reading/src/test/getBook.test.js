import { getBooks } from "../helpers/getBooks"

describe("Prueba de getBooks()", () => {


    test('Debe retornar un arreglo de books', async() => {

        const books = await getBooks();

        expect(books.length).toBeGreaterThan(0);
        expect(books[0]).toEqual({
            name:expect.any(String),
            author:expect.any(Array),
            url:expect.any(String)
        })
    })
})