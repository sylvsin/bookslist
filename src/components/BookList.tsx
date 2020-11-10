import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList: React.FC = () => {
    const { books } = useContext(BookContext);

    return books?.length ? (
        <div className="book-list">
            <ul>
                {
                    books.map((book, Index) => {
                       return(
                        <BookDetails book={book} key={Index} />
                       )
                    })
                }
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read. Hello free time</div>
    )
    
}
export default BookList