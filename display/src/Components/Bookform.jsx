import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Booklist from './Book';

const Bookform = ({card, setCard}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setCard({ Title: e.target.title.value, Author: e.target.author.value, Synopsis: e.target.synopsis.value })
        const updateBooklist = [
            ...Booklist, card
        ]
    }

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
