import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHidden } from "../../redux/actions";
import { connect } from "react-redux";
import { StoreState } from "../../redux/reducers";
import { CartItem } from "../../pages/shop/shop.data";

interface CartIconProps {
  toggleCartHidden: any;
  cartItems: CartItem[];
}

const CartIcon = ({ toggleCartHidden, cartItems }: CartIconProps) => {

  const numberOfItemsInCart = cartItems
    .map(cartItem => cartItem.quantity)
    .reduce((acc, quantity) => acc + quantity, 0);

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{numberOfItemsInCart}</span>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = {
  toggleCartHidden: toggleCartHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);