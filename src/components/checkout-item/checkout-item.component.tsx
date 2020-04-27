import React, { Dispatch } from 'react';

import './checkout-item.styles.scss';
import { CartItem } from "../../pages/shop/shop.data";
import { addItem, clearItemFromCart, removeItem } from "../../features/cart/actions";
import { connect } from "react-redux";
import { AnyAction } from 'redux';

interface CheckoutItemProps {
  item: CartItem;
}

interface CheckoutItemPropsPlus extends CheckoutItemProps {
  dispatch: Dispatch<AnyAction>;
}

const CheckoutItem = ({ item, dispatch }: CheckoutItemPropsPlus) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={item.imageUrl}/>
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(item))}>&#10094;</div>
        <span className='value'>{item.quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(item))}>&#10095;</div>
      </span>
      <span className='price'>${item.price}</span>
      <div className=' remove-button' onClick={() => {
        dispatch(clearItemFromCart(item));
      }}>&#10005;</div>
    </div>
  );
};

export default connect()(CheckoutItem);