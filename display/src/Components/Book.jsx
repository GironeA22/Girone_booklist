import React from 'react';
import {Card} from 'react-bootstrap';
import Bookform from './Bookform';

const Book = ({card}) => {
    console.log(card.Title)
    return (
        <Card>
            <Card.Body>
                <Card.Title><h1>{card.Title}</h1></Card.Title>
                <Card.Text>{card.Author}</Card.Text>
                <Card.Text>{card.Synopsis}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Book;
