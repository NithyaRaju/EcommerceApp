import React from 'react'
import './ProductsScreen.css'
import ProductList from '../../components/ProductList'
import { ProductsData, ExploreNewData } from '../../constants/constants'

export default function ProductsScreen() {
  
  return (
    <div className='products'>
       <ProductList data={ProductsData}></ProductList>
       <ProductList data={ExploreNewData}></ProductList>
    </div>
  )
}
