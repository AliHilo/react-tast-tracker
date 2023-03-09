import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = (props) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{props.title} </h1>
      {location.pathname === '/' && (<Button  text= {props.showAdd ? 'Hide' : 'Show '} 
      color= {props.showAdd ? 'red' : 'green' }
      onClick = {props.onAdd} />)}

      </header>
  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.prototype = {
  title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {color:'red' , backgroundColor: 'black'};

export default Header