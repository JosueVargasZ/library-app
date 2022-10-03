import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import placeholder from '../assets/book-placeholder.jpeg';

export const Book = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user.user);
  const books = useSelector((state) => state.books.books);
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState({});

  

  useEffect(() => {
    setBook( books.find(book => book.id == id) );

    if(book){
      setInterval(() => {
        setIsLoading(false);
      }, 400);
    }
  }, []);


  return (
    <div className='container fadeIn'>
      {
        (isLoading) ? (
          <i className="spinner fa-solid fa-spinner fa-spin"></i>
        ) :
        (
          <div className='book fadeIn'>
            <h1 className='book__title'>{book.title}</h1>
            <figure className='book__body'>
              <img className='book__body__image' src={(book.image_url) ? book.image_url : placeholder} alt="a book cover" />
              <figcaption className='book__body__description'>
                <p>{book.description}</p>
                <p>Year published : {book.year_published}</p>
                <p>Availability: {(book.available === 1) ? 'Available' : 'Not available'}</p>
                <div className='book__body__buttons'>
                  <a target="_blank" href={book.url} >
                    Website <i className="fa-solid fa-up-right-from-square"></i></a>
                  <Link to={`/edit/${id}`} className={(user.id == book.user_id) ? "" : "book__body__buttons__a--disabled"}>Edit <i className="fa-solid fa-pen-to-square"></i></Link>
                  <button className={(user.id == book.user_id) ? "" : "book__body__buttons__a--disabled"}>Delete <i className="fa-solid fa-trash"></i></button>
                </div>
              </figcaption>
            </figure>
          </div>
        )
      }
    </div>
  )
}
