import { axiosInstance } from '../config/config'

/**
 * Retrieves all the books.
 * @returns the books retrieved.
 */
const getAll = () => {
    const request = axiosInstance.get();
    return request.then(response => response.data);
}

/**
 * Retrieves a book by its ISBN.
 * @param {string} isbn the isbn of the book to retrieve.
 * @returns the book with the matching ISBN.
 */
const getBook = (isbn) => {
    const request = axiosInstance.get(`/${isbn}`);
    return request.then(response => response.data);
}

/**
 * Deletes a book by its ISBN.
 * @param {*} isbn the ISBN of the book to delete.
 * @returns 
 */
const remove = (isbn) => {
    const request = axiosInstance.delete(`/${isbn}`);
    return request;
}

/**
 * Creates a book.
 * @param {object} newBook the book to create. 
 * @returns 
 */
const create = (newBook) => {
    const request = axiosInstance.post(process.env.REACT_APP_SERVER_URL, newBook);
    return request.then(response => response.data);
}

/**
 * Updates an existing book.
 * @param {string} isbn the ISBN of the book to update.
 * @param {object} updatedBook the book with updated information.
 * @returns 
 */
const update = (isbn, updatedBook) => {
    const request = axiosInstance.put(`/${isbn}`, updatedBook);
    return request.then(response => response.data);
}


const booksService = {
    getAll,
    getBook,
    remove,
    create,
    update
}

export default booksService