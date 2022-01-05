import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectBooklist } from '../state/booklistSlice';

const Book = () => {
    const Booklist = useSelector(selectBooklist);
    console.log(Booklist)
    return (
        <>
            {Booklist.map((book, i) => {
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{Booklist[i].Title}</h1></Card.Title>
                            <Card.Text>{Booklist[i].Author}</Card.Text>
                            <Card.Text>{Booklist[i].Synopsis}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
            }
        </>
    )
}
export default Book;
