import React from 'react'
import './OffersScreen.css'
import background from '../../assets/images/background.png'

export default function OffersScreen() {
  return (
    <div className='offers' style={{backgroundImage: `url(${background})`}}>
      <div className='text-container'>
       <h1 style={{ color: 'white', width: '191px' , height: '81px'}}>ZARA</h1>
       <p className='description' style={{ color: 'white' }}>Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.</p>
       <button style={{ color: 'black', padding: '10px'}}>See collection</button>
      </div>
      
    </div>
  )
}
