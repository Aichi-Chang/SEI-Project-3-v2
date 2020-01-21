import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'



const Dashboard = (props) => {

  const [data, setData] = useState()
  const [errors, setErrors] = useState({
    errors: {}
  })

  useEffect(() => {
    fetch(`/api/dashboard/${props.match.params.id}` , {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => res.json())
      .then(res => setData(res))      
  }, [])


  // function handleChange(e) {
  //   e.persist()
  //   setData(data => ({ ...data, [e.target.name]: e.target.value }))
  //   setErrors(err => ({ ...err, [e.target.name]: '' }))
  // }

  // function handleSubmit(e) {
  //   e.persist()
  //   e.preventDefault()
  //   axios.post('/api/login', data)
  //     .then(res => {
  //       Auth.setToken(res.data.token)
  //       Auth.setUser(res.data.user)
  //       // console.log(res.data.token)
  //       // console.log(Auth.getUser())
  //       props.history.push('/')
  //     })
  //     .catch(err => setErrors({ ...errors, errors: err.data }))
  // }

  console.log(data)

  if (!data) return null
  
  return <div>
    <div className='flex flex-wrap justify-around mr6 ml6'>

      <h1 className='f1 mt6 mb4 w-100'>
        {data.likes}
      </h1>

    </div>
  </div>


}



export default Dashboard