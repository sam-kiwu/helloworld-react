
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
 
        <nav className="nav">
 
        <a href="/" className="site-title"> PET SHOP</a>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Sample">Sample</Link>
            </li>
            <li>
            <Link to="/pricing">pricing</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
           
        </ul>

    </nav>

    )
  }
}
