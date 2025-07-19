import React from 'react'
import './BestSellerScreen.css'
import Header from '../../components/Header'
import ProductsFilter from '../../components/ProductsFilter'
import ProductList from '../../components/ProductList'
import { useSelector } from 'react-redux';

export default function BestSellerScreen() {
    const bestSellers = useSelector(state => state.data.bestSellers)

  return (
    <div className='bestseller'>
      <Header title={'Best Seller'}></Header>
      <ProductsFilter></ProductsFilter>
      <ProductList data={bestSellers}></ProductList>
    </div>
  )
}
