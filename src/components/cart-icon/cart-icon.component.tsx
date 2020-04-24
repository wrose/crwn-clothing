import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHidden } from "../../redux/actions";
import { connect } from "react-redux";
import { StoreState } from "../../redux/reducers";

interface CartIconProps {
  toggleCartHidden: any;
  itemCount: number;
}

const CartIcon = ({ toggleCartHidden, itemCount }: CartIconProps) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }: StoreState) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
})

const mapDispatchToProps = {
  toggleCartHidden: toggleCartHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);