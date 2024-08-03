import React from 'react'
import {categories} from '../utils/constants';
const Sidebar = ({selectedcategory, setselectedcatogry}) => {
    
    return (
    <div style={{display:'flex', flexDirection:'column'}}>
        {categories.map((category) =>(
            <button className='category_btn' onClick={() => setselectedcatogry(category.name)} style={{background: category.name === selectedcategory && '#FC1503',color:'white'}} >
                <span style={{color:category.name === selectedcategory ? 'white' : 'red', marginRight:'15px'}}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedcategory ? "1" : "0.8" }}>{category.name}</span>
            </button>
        ))}
    </div>
  )
}

export default Sidebar