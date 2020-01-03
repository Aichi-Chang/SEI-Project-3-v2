import React from 'react'
import { Link } from 'react-router-dom'

export const BookCards = ({ book }) => (
  <div className='w-25 pa3'>
    <Link to={`/culture-books/${book._id}`} className='pointer dim'>
      <img src={book.image} alt="image"/>
      <span className='near-black f4'>{book.author}</span>
      <p className='gray'>{book.category}</p>
    </Link> 
  </div>


)
export default BookCards