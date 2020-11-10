import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import { Form } from "react-bootstrap";

const NewBookForm: React.FC = () => {
    const { addBook } = useContext(BookContext);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // console.log(title, author);
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <Form onSubmit={ handleSubmit }>
            
            <input type="text" placeholder="Book title" value={title} 
                onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)  } required />

            <input type="text" placeholder="Author" value={author} 
                onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)  } required />

            <input type="submit" value="Abb book" />
                
        </Form>
    )
}
export default NewBookForm