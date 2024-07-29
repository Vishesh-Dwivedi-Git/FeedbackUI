import React from 'react'
import Settings from '../assets/Settings.gif';

function Spinner() {
  return (
   <img src={Settings} alt='Loading...' style={{width:'100px',margin:'auto',display:'block'}}/> 
  )
}

export default Spinner
