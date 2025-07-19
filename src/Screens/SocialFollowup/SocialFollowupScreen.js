import React from 'react'
import './SocialFollowupScreen.css'
import Header from '../../components/Header';
import ProductList from '../../components/ProductList'
import SubscribeNewsletter from '../../components/SubscribeNewsletter';
import { SocialFollowupData } from '../../constants/constants';

export default function SocialFollowupScreen() {
 
  return (
    <div className='socialfollowup'>
      <Header title={'Follow products and discounts on Instagram'}></Header>
      <ProductList data={SocialFollowupData}></ProductList>
      <SubscribeNewsletter title={'Or subscribe To The NewsLetter'} showInput={true}></SubscribeNewsletter>
    </div>
  )
}
