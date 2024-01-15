import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/Fill 213.png'
const Nav = () => {
    return ( 
        <div className='nav'>
        <img src={logo} className='nav--logo'/>
        <h4 className='nav--text'>my travel journal.</h4>
        </div>
    );
}
export default Nav
