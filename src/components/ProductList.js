import React from 'react'
import './ProductList.css'
export default function ProductList({data}) {

  const listItems = data.map((item, index) => {
    return (
     <div key={index}>
       {item.title && <h3>{item.title}</h3>}
       {item.image && <img src={item.image}></img>}
       <div>
         {item.prodtitle && <p>{item.prodtitle}</p>}
         <div className='product-details'>
          {item.type && <p>{item.type}</p>}
          {item.price && <p>{item.price}</p>}
           {item.discountPrice && <p className='discount-price'>{item.discountPrice}</p>}
         </div>
       </div>
     </div>
    )
  });
  return (
    <div className='productlist'>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
