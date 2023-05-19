
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="nav">
        <a href="/" className="site-title"> PET SHOP</a>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/pricing">Pricing</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
           
        </ul>
    </nav>
    )
  }
}
