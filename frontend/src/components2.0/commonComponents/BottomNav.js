import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

const BottomNav = (props) => {
  // if I moved state, then handleLogout doesn't work...???
  const [data, setData] = useState({
    userLogin: 'true'
  })

  function handleLogout(e) {
    e.preventDefault()
    Auth.logOut()
    setData({ ...data, userLogin: 'false' })
    // props.history.push('/')
  }

  console.log(data)
  
  
  return <div className='fixed z-1 garamond flex w-100'>

    <div className='flex fixed left-0'>
      <Link to={'/'} className='grow gray pa3'>Home</Link>
      <Link to={'/clothing'} className='grow gray pa3'>Clothing</Link>
      <Link to={'/communities'} className='grow gray pa3'>Community</Link>
      <Link to={'/currents'} className='grow gray pa3'>Current</Link>
      
      <div className='grow gray pa3 pointer hide-child'>
        Culture ▾
        <div className='child flex flex-column'>
          <Link to={'/culture-books'} className='grow gray pt2'>
            Books
          </Link>
          <Link to={'/culture-films'} className='grow gray pt2'>
            Films
          </Link>
          <Link to={'/culture-music'} className='grow gray pt2'>
            Music
          </Link>  
        </div>
        
      </div>
    </div>     

    <div className='flex fixed right-0'>

      <Link to={'/register'} className='grow gray pa3'>
        { Auth.isAuthenticated() ? '' : <strong>Sign up</strong> }
      </Link>

      <Link to={'/login'} className='grow gray pa3'>
        { Auth.isAuthenticated() ? '' : 'Log in' }
      </Link>

      <a className='grow gray pa3 mr3' onClick={(e)=>handleLogout(e)}>
        { Auth.isAuthenticated() ? 'Log out' : '' }
      </a>

    </div>
  </div>
}



export default BottomNav