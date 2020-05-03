import React, { Dispatch } from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItemComponent from "../cart-item/cart-item.component";
import { CartItem } from "../../features/shop/data";
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { History, LocationState } from 'history';
import { AnyAction } from 'redux';
import { StoreState } from "../../store";
import { selectCartItems } from "../../features/cart/selectors";
import { toggleCartHidden } from "../../features/cart/actions";

interface CartDropdownProps {
  cartItems: CartItem[];
}

interface CartDropdownPropsPlus extends CartDropdownProps {
  history: History<LocationState>;
  dispatch: Dispatch<AnyAction>;
}

const CartDropdown = ({ cartItems, history, dispatch }: CartDropdownPropsPlus) => {
  return (
    <div className='cart-dropdown'>
      {cartItems.length ? (
        <div className='cart-items'>
          {cartItems.map(cartItem =>
          <CartItemComponent key={cartItem.id} item={cartItem}/>
          )}
        </div>
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <CustomButton onClick={() => {
        history?.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, CartDropdownProps>({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
