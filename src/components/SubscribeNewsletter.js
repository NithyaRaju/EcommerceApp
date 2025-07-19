import React from 'react'
import './SubscribeNewsletter.css';
export default function SubscribeNewsletter({title, showInput}) {

  return (
    <div>
      <h1>{title}</h1>
      {showInput && (
          <div className='subscribe'>
            <input placeholder={'Email Address'}/>
             <button>Submit</button>
          </div>
         
      )}
    </div>
  )
}
