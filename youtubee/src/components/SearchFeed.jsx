import React, { useEffect, useState } from 'react'

import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchfromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [Videoss,setVideos] =useState([])
  useEffect( () =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  },[])


  return (
      <div style={{padding:'15px'}}>
      <h2 style={{fontWeight:'bold',marginBottom:'2px'}}>
      <span style={{color:'white'}}>Search Results for:</span> <span style={{color:'#F31503'}}>{searchTerm}</span>videos
      </h2>
      <Videos videos={Videoss}/>
      </div>
  )
}

export default SearchFeed