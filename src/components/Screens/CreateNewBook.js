import React from 'react'
import booksService from '../../services/bookService';
import { useHistory } from 'react-router-dom'
import { Form, Button, Input } from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CreateNewBook = ({ books, setBooks }) => {
    const history = useHistory()
    const booksIsbn = books.map(book => book.isbn)
    const addBook = (values) => {
        const bookObject = {
            title: values.Title,
            genre: values.Genre,
            isbn: values.ISBN,
            summary: values.Summary
        }
        booksService
            .create(bookObject)
            .then(() => {
                books.push(bookObject);
                setBooks(books)
            })
    }
    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Create New Book'
            />
            <Form
                style={{ padding: '2%' }}
                onFinish={(values) => {
                    addBook(values)
                    history.push('/books');
                }}
                autoComplete='on'
                labelCol={{ span: 3 }}
            >
                <Form.Item
                    name='Title'
                    label='Title'
                    rules={[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input Title' />
                </Form.Item>
                <Form.Item
                    name='Genre'
                    label='Genre'
                    rules={[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input Genre' />
                </Form.Item>
                <Form.Item
                    name='ISBN'
                    label='ISBN'
                    rules={[
                        {
                            required: true,
                        },
                        { whitespace: true },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (value.match(/^[0-9._-]+$/) === null) {
                                    return Promise.reject(new Error('ISBN only consists of numbers'))
                                }
                                if (booksIsbn.includes(value)) {
                                    return Promise.reject(new Error('ISBN already exists'))
                                }
                                if (value.replaceAll('-', '').length !== 13) {
                                    return Promise.reject(new Error('ISBN needs to have 13 digits'))
                                }
                                return Promise.resolve()
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input ISBN' />
                </Form.Item>
                <Form.Item
                    name='Summary'
                    label='Summary'
                    rules={[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <TextArea rows={5} placeholder='Input Summary' />
                </Form.Item>
                <Form.Item >
                    <Button block type='primary' htmlType='submit'>
                        Add New
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateNewBook