import React from 'react';

import './cart-item.styles.scss';
import { CartItem } from "../../pages/shop/shop.data";

interface CartItemProps {
  item: CartItem
}

const CartItemComponent = ({ item: { imageUrl, price, name, quantity } }: CartItemProps) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;