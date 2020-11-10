import React, { useContext } from 'react';
import { Book, BookContext } from '../contexts/BookContext';

const BookDetails: React.FC<{book: Book}> = ({ book }) => {

    const { removeBook } = useContext(BookContext);

    return(
        <li onClick={ () => removeBook(book.id)  }>
            <div className="title">{ book.title }</div>
            <div className="auther">{ book.author }</div>
        </li>
    )

}
export default BookDetails