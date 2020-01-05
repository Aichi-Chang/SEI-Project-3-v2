import React, { useState, useEffect } from 'react'
import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import Map from '../commonComponents/Map'

import Auth from '../../lib/auth'
import CommentForm from '../commonComponents/CommentForm'
// import Rating from '../commonComponents/Rating'




const SingleCommunity = (props) => {
  const [data, setData] = useState({ comments: [] })
  const [user, setUser] = useState()

  


  useEffect(() => {
    fetch(`/api/communities/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
      // .then(res => setEvent({ event: res }))      
  }, [])



  function handleDelete(e) {
    axios.delete(`/api/communities/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }

  function handleLikes() {
    const token = Auth.getToken()
    const currentUser = Auth.getUser()
    setUser(currentUser)

    if (!user) return null
    const articleId = data
    // console.log(articleId)

    const likes = user.likes
    likes.push(articleId)
    // console.log(user)

    axios.put(`/api/dashboard/${currentUser}`, { likes: likes }, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(console.log(user))
      .catch(err => console.log(err))
  }

  // canModify() {
  //   return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  // }

  // console.log(data._id)
  // console.log(user)

  
  return <div>
    <div className='flex flex-wrap justify-around mr6 ml6'>

      <h1 className='f1 mt6 mb4 w-100'>{data.title}</h1>
      
      <div className='w-50-l mb5 pr4'>
        <p className='f4 mb4'>{data.text}</p>
        <a href={data.website} className='grow gold f5 mb6-m' target='blank'>Check out the website ▹ ▹ ▹</a>
        <br/>
        <button className='pointer pa2 washed-green bg-dark-gray grow br2 mb2' onClick={(e) => handleLikes(e)}>like</button>
      </div>

      <div className='w-50-l mb5'>
        <img src={data.image} />
      </div>
    </div>  

    <div className='flex mr6 ml6 justify-end'>
      <Map  data={data} />
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


export default SingleCommunity