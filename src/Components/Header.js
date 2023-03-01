

import React from 'react'
import "./header.css"
import {Link} from 'react-router-dom'
const Header = (props) => {
  return (
    <>
          <div className="header">
        <h1>{props.title}</h1> 
        <div>
        <button type='switch'> Dark Mode</button> &nbsp;
          <Link to={"/signup"}><button type="button"> SignUp </button></Link>
        </div>
          </div> 
    </>
  )
}

export default Header
