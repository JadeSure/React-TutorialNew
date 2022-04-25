import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";

export default function Navbar() {
    const {books} = useContext(BookContext);

  return <div>
      <h1>Navbar</h1>
      <p>Currently you have {books.length} books to get...</p>
  </div>;
}
