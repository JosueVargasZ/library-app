import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AddBookCard } from './AddBookCard';

import { BookCard } from './BookCard'

export const Books = ({ books, byUser=false }) => {

  const { user:id } = useParams();

  const [booksByUser, setBooksByUser] = useState([]);

  useEffect(() => {
      setBooksByUser( books.filter( book => book.user_id == id) );
  }, [id]);


  return (
    <section className='container container--grid fadeIn'>
        {

          (byUser) ? booksByUser.map( (book) => <BookCard key={book.id} book={book}/>)
                 : books.map( (book) => <BookCard key={book.id} book={book}/>)
        }
      <AddBookCard />
    </section>
  )
}
