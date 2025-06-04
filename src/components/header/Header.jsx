import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <div id='header'>
       <div className='section-1'>
            <div className='logo'>
                <img id='header-logo' src={logo} alt="logo" />
                <p className='logo-name'>DevUI</p>
            </div>
            <div className='navbar'>
                <nav>
                    <ul>
                        <li> <a href="/products" >Products</a> </li>
                        <li> <a href="/features">Features</a> </li>
                        <li> <a href="/pricing">Pricing</a> </li>
                        <li> <a href="/support">Support</a> </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='section-2'>
            <div className='free-trial-button'> 
                <button className='button'>Start free trial</button> 
            </div>
        </div>
    </div>
  )
}
