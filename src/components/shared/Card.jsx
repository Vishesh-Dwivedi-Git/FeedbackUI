import React from 'react'
import PropTypes from 'prop-types'

function Card({children , reverse }) {
  return (
   <div className={`card ${reverse && 'reverse'}`} style={{marginLeft:10}}>
     {children}
   </div> //can use ternary operator as well
   
  )
}
Card.defaultProps={
    reverse:false,
}

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}
export default Card
