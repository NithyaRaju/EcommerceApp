import React from 'react'
import shopNow from '../assets/images/shopnow.png'
import './ShopNow.css'

export default function ShopNow() {
  return (
    <div className='shopnow'>
      <div className='text-container'>
       <h1 style={{ color: 'black' }}>Collections</h1>
       <p style={{ color: 'black' }}>you can explore ans shop many differnt collection
from various barands here.</p>
       <button style={{ background: 'balck', color: 'black', padding: '10px'}}>Shop Now</button>
      </div>
       <img src={shopNow}></img>
    </div>
  )
}
