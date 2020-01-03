import React from 'react'
import { Link } from 'react-router-dom'



const ClothingCard = ({ item }) => (
  <div className='w-25 pa3'>
    <Link to={`/clothing/${item._id}`} className='pointer dim'>
      <img src={item.image} alt="image"/>
      <span className='near-black f4'>{item.title}</span>
      <p className='gray'>{item.brand}</p>
    </Link> 
  </div>
  

)
export default ClothingCard