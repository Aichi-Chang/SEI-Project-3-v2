import React from 'react'
import { Link } from 'react-router-dom'


const CurrentCards = ({ article }) => (
  <div className='w-25 pa3'>
    <Link to={`/currents/${article._id}`} className='pointer dim'>
      <img src={article.image} alt="image"/>
      <span className='near-black f4'>{article.title}</span>
      <p className='gray'>{article.address}</p>
    </Link> 
  </div>
)

export default CurrentCards