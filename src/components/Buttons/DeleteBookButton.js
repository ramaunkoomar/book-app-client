import { Button } from 'antd'
import React from 'react'
import booksService from '../../services/bookService'

const DeleteBookButton = ({ isbn, setBooks, books }) => {

    const deleteBook = (isbn) => {
        booksService
            .remove(isbn)
            .then(() => {
                setBooks(books.filter(book => book.isbn !== isbn))
            })
    }

    return (
        <Button type='primary' onClick={() => deleteBook(isbn)}>
            Delete
        </Button>
    )
}

export default DeleteBookButton