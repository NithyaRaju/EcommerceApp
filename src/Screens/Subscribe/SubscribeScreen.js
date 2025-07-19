import React from 'react'
import './SubscribeScreen.css'
import ProductsFilter from '../../components/ProductsFilter'
import SubscribeNewsletter from '../../components/SubscribeNewsletter';
import ProductList from '../../components/ProductList'
import {SubscribeData} from '../../constants/constants'
export default function SubscribeScreen() {
  return (
    <div>
      <SubscribeNewsletter title={'Or Subscrible To The Newsletter'} showInput={false}></SubscribeNewsletter>
      <ProductsFilter></ProductsFilter>
       <ProductList data={SubscribeData}></ProductList>
    </div>
  )
}
