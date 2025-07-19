import React from 'react'
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader'
import './HomeScreen.css'
import ShopNow from '../../components/ShopNow'
import logo from '../../assets/images/logo.png'

export default function HomeScreen() {
  return (
    <div className='homeScreen'>
       <Header 
       logo={logo}  
       showSearchIcon
       showShoppingIcon/>
        <div className='line'></div>
       <SubHeader/>
       <ShopNow/>
    </div>
  )
}
