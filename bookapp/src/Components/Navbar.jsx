import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>BookStore</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Cart</a></li>
      </ul>
    </nav>
  )
}

export default Navbar