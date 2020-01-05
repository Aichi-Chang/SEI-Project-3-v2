import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'



const Login = (props) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    errors: {}
  })


  function handleChange(e) {
    e.persist()
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
    setErrors(err => ({ ...err, [e.target.name]: '' }))
  }

  function handleSubmit(e) {
    e.persist()
    e.preventDefault()
    axios.post('/api/login', data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setUser(res.data.user)
        // console.log(res.data.user)
        // console.log(Auth.getUser())
        props.history.push('/')
      })
      .catch(err => setErrors({ ...errors, errors: err.data }))
  }

  


  return <div className="flex flex-column items-center justify-center bg-near-white vh-100">
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="pa3 mr2 mt6">
        <label>
          Email
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="email"
          className="input"
        />
        {/* {this.state.errors.email && <small className="help is-danger">
        {this.state.errors.email}
      </small>} */}
      </div>

      <div className="pa3 mr2">
        <label>
          Password
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="password"
          className="input"
        />
      </div>

      <div className="pa3 mr2 mt2 tc">
        <button className="pointer pa2 washed-green bg-dark-gray grow br2 ">
          Log in
        </button>
      </div>
      
      <div className="pa3 mr2 mt5 f6 tc">
        <p>Need to register an account? <a href={'/register'} className='gray dim:hover b'>Click here to register</a></p>
      </div>
    </form>
  </div>


}



export default Login