import React from 'react'
import './SocialFollowupScreen.css'
import Header from '../../components/Header';
import ProductList from '../../components/ProductList'
import SubscribeNewsletter from '../../components/SubscribeNewsletter';
import { useSelector } from 'react-redux';

export default function SocialFollowupScreen() {
  const socialFollowup = useSelector(state => state.data.socialFollowup)
 
  return (
    <div className='socialfollowup'>
      <Header title={'Follow products and discounts on Instagram'}></Header>
      <ProductList data={socialFollowup}></ProductList>
      <SubscribeNewsletter title={'Or subscribe To The NewsLetter'} showInput={true}></SubscribeNewsletter>
    </div>
  )
}
