import React, { useState } from 'react'
import Auth from '../../lib/auth'
import axios from 'axios'



const CommentForm = ({ url, updateData, data }) => {
  const [formData, setFormData] = useState('')
  const [errors, setErrors] = useState({
    errors: []
  })

  // function getcomment(){
  //   axios.get(comment)
  //   .then((response)=>setFormData(response))
  // }

  // useEffect(getcomment, [])

  function handleChange(e) {
    setFormData(e.target.value)
    setErrors({ ...errors, errors: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post( url , { content: formData }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(response => {
        const newData = { ...data }
        newData.comments = response.data 
        updateData(newData)
        setFormData('')
        // getcomment()
      })
      .catch(err => setErrors({ ...err, errors: err.data }))
  }
  


  return (
    <div className='mb4'>
      {Auth.isAuthenticated() && <h6 className='f4 dark-gray mr4'>Hi {`${Auth.getUser().username}`}, what's on your mind?</h6>}
      {Auth.isAuthenticated() && <form onSubmit={(e) => handleSubmit(e)}>
        <textarea 
          onChange={(e) => handleChange(e)}
          className='db border-box hover-black w-100 mw-100 ba b--black-20 bg-near-white br2 mb2'
          placeholder="Your Comment"
          // value={formData}
          rows='6'
          cols='60'
        />
        <button className='pointer pa2 washed-green bg-dark-gray grow br2'>
          Add Comment
        </button>
      </form>}
    </div>

  )
}





export default CommentForm