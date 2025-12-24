import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function Navbar() {

  return (
    <div>
      <nav className='nav'>
        <div className='h1-container'>
          <h1 className="gradient-heading ">Student Dropout Analytics – India</h1>
        </div>
        <ul className='nav-elements'>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}
