import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchfromAPI'


const Feed = () => {
  const [selecteddCatogry,setselecteddCatogry] =useState('New')
  const [Videoss,setVideos] =useState([])
  useEffect( () =>{
    fetchFromAPI(`search?part=snippet&q=${selecteddCatogry}`).then((data) => setVideos(data.items))
  },[selecteddCatogry])


  return (
    <div className='feed'>
      <div>
      <Sidebar selectedcategory={selecteddCatogry} setselectedcatogry={setselecteddCatogry}/>
      <p style={{color:'#fff'}}>Copyright © 2024 JSM Media</p>
      </div>

      <div style={{padding:'15px'}}>
      <h2 style={{fontWeight:'bold',marginBottom:'2px'}}>
      <span style={{color:'white'}}>{selecteddCatogry}</span> <span style={{color:'#F31503'}}>videos</span>
      </h2>
      <Videos videos={Videoss}/>
      </div>
    </div>
  )
}

export default Feed