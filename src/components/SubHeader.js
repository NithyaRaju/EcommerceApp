import React from 'react'
import './SubHeader.css'
import { useSelector } from 'react-redux';

export default function SubHeader() {

  const subHeader = useSelector(state => state.data.subHeader)

  const listItems = subHeader.map((item, index) => {
    console.log(item.title);
   return  <li className='item' key={index}>{item.title}</li>
  });
  return (
    <div className='subHeader'>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
