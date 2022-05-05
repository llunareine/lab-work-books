import React, {useRef, useState, useEffect }from 'react'
import './Book.module.css'


function Book(props) {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.focus();
  }, [])

  return (
    <article className="book" ref={divRef} onClick={() => console.log("Element clicked!")}>
            <img src={props.img}  />
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
            <button className="button">Add</button>
    </article>
  )
}

export default Book
