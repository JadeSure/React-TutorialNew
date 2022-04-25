import React, {createContext, useState, useReducer, useEffect} from "react";
import {v4 as uuid} from 'uuid';
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, dispatch] =useReducer(bookReducer, JSON.parse(localStorage.getItem('books')))

  useEffect(()=> {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
 
//   const addBook = (title, author, id) => {
//       setBooks([...books, {title, author, id: uuid()}])
//   }

//   const removeBook = (id) => {
//     setBooks(books.filter(book => {
//         return book.id !== id;
//     }))
//  }

 return (
     <BookContext.Provider value={{books, dispatch}} >
        {props.children}
     </BookContext.Provider>
 )
}
