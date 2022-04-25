import React, {useContext, useState} from "react";
import {BookContext} from '../contexts/BookContext'

export default function BookForm() {
    const {dispatch} = useContext(BookContext)
    const [book, setBook] = useState({title: '', author: ''})

    const handleSubmit = e => {
        e.preventDefault();
        if(book.title.length === 0 || book.author.length === 0) return
        dispatch({type: 'ADD_BOOK', book : {
            title: book.title,
            author: book.author,
        }})
        setBook({title: '', author:''})
    }
     
    console.log(book);
  return <div>
      <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Book title" value={book.title} 
          onChange={e => setBook({...book, title: e.target.value})}/>
            <input type="text" placeholder="Author title" value={book.author}
          onChange={e => setBook({...book, author: e.target.value})}/>
          <input type="submit" value="add book" />
      </form>
  </div>
}
