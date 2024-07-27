import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className='about-link'>
    <Link to={{
        pathname:'/about',
        search:'?sort=name',
        hash:'#hello',
    }}>
      <FaQuestion size={30}/>
      </Link> 
    </div>
  )//used <Link> instead of <a> tag , bcz anchor tag refreshes the page , where as link doesn't
}

export default AboutIconLink
