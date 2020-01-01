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
      <Link to={'/'} className='gray pa3 mr2'>Home</Link>
      <Link to={'/clothing'} className='gray pa3 mr2'>Clothing</Link>
      <Link to={'/communities'} className='gray pa3 mr2'>Community</Link>
      <Link to={'/currents'} className='gray pa3 mr2'>Current</Link>
      
      <div className='gray pa3 pointer'>
        Culture
        <Link to={'/culture-books'} className='black'>
        Books
        </Link>
        <Link to={'/culture-films'} className='black'>
          Films
        </Link>
        <Link to={'/culture-music'} className='black'>
          Music
        </Link>  
      </div>
    </div>     

    <div className='flex fixed right-0'>

      <Link to={'/register'} className='gray pa3'>
        { Auth.isAuthenticated() ? '' : <strong>Sign up</strong> }
      </Link>

      <Link to={'/login'} className='gray pa3'>
        { Auth.isAuthenticated() ? '' : 'Log in' }
      </Link>

      <a className='gray pa3 mr3' onClick={(e)=>handleLogout(e)}>
        { Auth.isAuthenticated() ? 'Log out' : '' }
      </a>

    </div>
  </div>
}



export default BottomNav