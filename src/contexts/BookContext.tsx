/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useEffect, useState} from 'react';

export class Book {
    id!: number;
    title!: string;
    author!: string;
}

export interface IBookContext {
    books: Book[];
    addBook: (title: string, author: string) => void;
    removeBook: (id: number) => void;
}

export const BookContext = createContext<IBookContext>({
    books:  [],
    removeBook: (id: number) => {},
    addBook: (title: string, author: string) => {}
}); 

const myBooks = () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData): []
}

const BookContextProvider: React.FC = (props) => {
    const [books, setBooks] = useState<Book[]>(myBooks);
    
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    const addBook = (title: string, author: string) => {
        setBooks([
            ...books, {title, author, id: books.length}
        ]);
    }

    const removeBook = (id: number) => {
        // eslint-disable-next-line no-self-compare
        setBooks(books.filter(book => book.id !== id))
    }

    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
export default BookContextProvider;