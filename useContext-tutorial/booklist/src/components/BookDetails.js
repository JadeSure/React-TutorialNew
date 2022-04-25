import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";


export default function BookDetails(props) {
    const {dispatch} = useContext(BookContext);
    const {book} = props;
  return <div>
        {book.title} - {book.author} 
        <button onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>Remove this book</button>
  </div>;
}
