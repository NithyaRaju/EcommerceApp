import React from 'react'
import './ProductsScreen.css'
import ProductList from '../../components/ProductList'
import { useSelector } from 'react-redux';

export default function ProductsScreen() {
      const productsData = useSelector(state => state.data.products)
      const exploreNewData = useSelector(state => state.data.exploreNew)
  
  return (
    <div className='products'>
       <ProductList data={productsData}></ProductList>
       <ProductList data={exploreNewData}></ProductList>
    </div>
  )
}
