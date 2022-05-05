
import React,{ useEffect, useRef, useState } from 'react';
import './App.css';
import Book from './Book';

function App() {
  const [value, setValue] = useState('');
  const [books, setBooks] = useState([]);
  const inputRef = useRef(null);
  function focusTitle() {
    console.log('called')
    inputRef.current.focus();
    fetchBooks(value);
  }
  const fetchBooks = (book) => {
    console.log(book.term)
    fetch(`http://localhost:4000/books?title=${book.term}`).then(res => res.json()).then(result =>
      setBooks(result)).catch((err) => console.log(err));
      
  }
  return (
      <>
      <div style={{width: '70%', margin: '0 auto'}}>
        <div style={{display:'flex', justifyContent: 'center', marginBottom: '30px'}}>
          <input ref={inputRef} type="text" placeholder='Find book by title name' onChange={e => setValue({term: e.target.value })}/>
          <button className='button' onClick={focusTitle}>Click</button>
        </div>
        
          {books.map((book) => {
          
          return <Book key={book.id} {...book}></Book>
        }) }
      </div>
      
      </>
  );
}

export default App;
