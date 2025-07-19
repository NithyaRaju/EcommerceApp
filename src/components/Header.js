import React from 'react'
import './Header.css'
import searchIcon from '../assets/images/searchicon.png'
import accountIcon from '../assets/images/account-icon.png';
import shoppingIcon from '../assets/images/shopping-icon.png';
export default function Header({title, logo, showSearchIcon, showShoppingIcon}) {
  return (
    <div className='header'>
      {showSearchIcon && <img src={searchIcon} style={{ width: '24px', height: '24px', marginTop: '2%'}}/>}
      {title && <h1>{title}</h1>}
      {logo && <img src={logo} style={{ width: '100px', height: '50px',  marginTop: '1%'}}/>}
      {showShoppingIcon && 
      <div className='shopping'>
        <div className='shoppingItems'>
         <img src={accountIcon} style={{ width: '24px', height: '24px', marginTop: '15%'}}/>
         <p>Account</p>
        </div>
        <div className='shoppingItems'>
          <img src={shoppingIcon} style={{ width: '24px', height: '24px' ,marginTop: '15%'}}/>
         <p>Shopping</p>
        </div>
      </div>}
    </div>
  )
}
