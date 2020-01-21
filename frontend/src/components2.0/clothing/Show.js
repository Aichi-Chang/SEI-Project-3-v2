import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import CommentForm from '../commonComponents/CommentForm'

// import Rating from '../commonComponents/Rating'



const SingleClothing = (props) => {
  const [data, setData] = useState( { comments: [] })


  useEffect(() => {
    fetch(`/api/clothing/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res.data))
  },[])


  function handleDelete(e) {
    axios.delete(`/api/clothing/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }

 
  return <div>
    <div className='flex flex-wrap justify-around mr6 ml6'>

      <h1 className='f1 mt6 mb4 w-100'>{data.title}</h1>
      
      <div className='w-50-l mb5 pr4'>
        <p className='f3 mb2 dark-blue'>{data.department}</p>
        <p className='f4 mb4'>{data.text}</p>
        {/* <Rating className='' /> */}
      </div>

      <div className='w-50-l mb5'>
        <img src={data.image} />
      </div>
    </div>  

    <div className='mr6 ml6'>
      <CommentForm 
        url={`/api/communities/${props.match.params.id}/comments`}
        updateData={setData}
        data={data}
      />
    </div>

    <div className='mr6 ml6 mb6'>
      {data.comments.map((comment) =>
        <div key={comment._id} className=''> 
          <div className='db hover-black w-100 mw-100 bg-near-white br2 mb1 mr3 pa2'> 
            {comment.content}
          </div>
          <button className='pointer pa2 washed-green bg-dark-gray grow br2 mb2' id={comment._id} onClick={(e) => handleDelete(e)}>delete</button>
        </div>   
      )}
    </div>
    
  </div> 



}


export default SingleClothing