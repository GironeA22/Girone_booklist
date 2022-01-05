import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addBooks} from '../state/booklistSlice';

const Bookform = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBooks({ Title: e.target.title.value, Author: e.target.author.value, Synopsis: e.target.synopsis.value }))
    }

    // const bookArr = (bookInfo) => {
    //     const booklist = []
    //     console.log(booklist)
    //     dispatch(addBooks(booklist))
    // }

    return (
        <Form onSubmit={handleSubmit}>
            <p>Title</p>
            <Form.Control name='title' placeholder='To Kill A Mockingbird' />
            <p>Author</p>
            <Form.Control name="author" placeholder='Harper Lee' />
            <p>Synopsis</p>
            <Form.Control name='synopsis' as='textarea' placeholder='Boo, Scout, and Gregory play in a treehouse' rows={3} />
            <br />
            <Button type='Submit'>Submit</Button>
        </Form>
    )
}

export default Bookform;
