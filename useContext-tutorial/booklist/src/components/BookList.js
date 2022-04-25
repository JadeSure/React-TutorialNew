import React, {useContext} from "react";
import {BookContext} from '../contexts/BookContext'
import BookDetails from "./BookDetails";

export default function BookList() {
    const {books} = useContext(BookContext)

  return  <div>
  {
  books.length > 0 ? <ul>
  {books.map(book =>{
      return <li key={book.id}><BookDetails book={book}/></li>
  })}
</ul>:
<p>No books to read</p>
}
</div>
}
//   books.length ? (
//       <div>
//           <ul>
//               {books.map(book => {
//                   return <BookDetails book={book} key ={book.id}/>
//               })}
//           </ul>
//       </div>
//   ): (
//       <div>No books here</div>
//   )
 
