import React from 'react'
import './BestSellerScreen.css'
import Header from '../../components/Header'
import ProductsFilter from '../../components/ProductsFilter'
import ProductList from '../../components/ProductList'
import {BestSellerData} from '../../constants/constants'

export default function BestSellerScreen() {

  return (
    <div className='bestseller'>
      <Header title={'Best Seller'}></Header>
      <ProductsFilter></ProductsFilter>
      <ProductList data={BestSellerData}></ProductList>
    </div>
  )
}
