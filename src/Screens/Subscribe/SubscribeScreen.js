import React from 'react'
import './SubscribeScreen.css'
import ProductsFilter from '../../components/ProductsFilter'
import SubscribeNewsletter from '../../components/SubscribeNewsletter';
import ProductList from '../../components/ProductList'
import { useSelector } from 'react-redux';

export default function SubscribeScreen() {
  const subscribe = useSelector(state => state.data.subscribe)
  
  return (
    <div>
      <SubscribeNewsletter title={'Or Subscrible To The Newsletter'} showInput={false}></SubscribeNewsletter>
      <ProductsFilter></ProductsFilter>
       <ProductList data={subscribe}></ProductList>
    </div>
  )
}
