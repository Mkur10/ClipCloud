import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] =useState('');
  const navigate = useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' id="" style={{outline:'none',border:'none'}} value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </form>
      <button type='submit' style={{outline:'none',border:'none', background:'white', color:'red'}}><SearchIcon/></button>
    </div>
  )
}

export default SearchBar