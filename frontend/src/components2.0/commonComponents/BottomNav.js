import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

const BottomNav = () => {

  const [data, setData] = useState()

  function handleLogout(e) {
    e.preventDefault()
    Auth.logOut()
    setData({ ...data })
    this.props.history.push('/')
  }

  console.log(data)
  
  
  return (
    <div className='z-1 garamond flex fixed w-100 justify-between bg-near-white'>

      <div className='flex'>
        <Link to={'/'} className='grow gray pa3 ml4'>Home</Link>
        <Link to={'/clothing'} className='grow gray pa3'>Clothing</Link>
        <Link to={'/communities'} className='grow gray pa3'>Community</Link>
        <Link to={'/currents'} className='grow gray pa3'>Current</Link>
        
        <div className='grow gray pa3 pointer flex flex-wrap hide-child'>
          Culture ▸ 
          <div className='child'>
            <Link to={'/culture-books'} className='gray pa3'>
              Books
            </Link>
            <Link to={'/culture-films'} className='gray pa3'>
              Films
            </Link>
            <Link to={'/culture-music'} className='gray pa3'>
              Music
            </Link>  
          </div>
          
        </div>
      </div>     

      <div className='flex'>

        {!Auth.isAuthenticated() && <Link to='/register' className='grow gray pa3'>
          <strong>Sign up</strong>
        </Link>}

        {!Auth.isAuthenticated() && 
        <Link to='/login' className='grow gray pa3'>
          Log in
        </Link>}

        {Auth.isAuthenticated() && <a className='grow gray pa3 mr3' onClick={(e)=>handleLogout(e)}>
          log out
        </a>}

        {Auth.isAuthenticated() && <Link to='dashboard' className='grow gray pa3 mr3'>
          { Auth.isAuthenticated() ? `${Auth.getUser().username}'s Dashboard` : '' }
        </Link>}

      </div>
    </div>
  )
}



export default BottomNav