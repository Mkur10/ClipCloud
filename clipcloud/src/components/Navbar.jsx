import React from 'react'

import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' style={{display:'flex', alignItems:'center'}}>
        <img src='https://i.ibb.co/s9Qys2j/logo.png' alt="logo" height={45} />
      </Link>
      <SearchBar/>
    </div>
  )
}

export default Navbar;