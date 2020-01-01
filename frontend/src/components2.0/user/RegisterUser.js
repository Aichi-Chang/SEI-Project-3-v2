import React, { useState } from 'react'
import axios from 'axios'



const RegisterUser = (props) => {
  

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [errors, setErrors] = useState({
    errors: ''
  })


  function handleChange(e) { 
    e.persist()
    console.log(data)
    // [e.target.name] is a [key], so doesn't matter what we type inside
    // it will be generate to a key in our object
    // see here: https://stackoverflow.com/questions/50376353/wy-we-need-to-put-e-target-name-in-square-brackets
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
    setErrors(errors => ({ ...errors, [e.target.name]: '' }))
  }

  function handleSubmit(e) {
    // e.persist()
    e.preventDefault()
    axios.post('/api/register', data)
      .then(res => {
        console.log(res.data)
        if (errors.errors === '')
          props.history.push('/login')
      }) 
      //this will catch our error in the backend, and setError will save it in our front end
      // ...errors, if they were empty(no error). Keep them empty
      // and if there is any new errors, update them with ...err.errors
      .catch(err =>setErrors({ ...errors, ...err.error }))
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
          // required={true}
          name="email"
          className="input"
        />
        {/* this is not working... */}
        {/* {errors.email && <small className="red">
          {errors.email}
        </small>} */}
      </div>

      <div className="pa3 mr2">
        <label>
          Username
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="username"
          className="input"
        />
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

      <div className="pa3 mr2">
        <label className='grow:hover'>
          Confirm password
        </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="passwordConfirmation"
          className="input"
        />
      </div>

      <div className="pa3 mr2 mt2 tc">
        <button className="pointer pa2 washed-green bg-dark-gray grow br2 ">
          Register
        </button>
      </div>
      
      <div className="pa3 mr2 mt5 f6 tc">
        <p>Already have an account? <a href={'/login'} className='gray dim:hover b'>Click here to log in</a></p>
      </div>
    </form>
  </div>

}



export default RegisterUser