import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { StoreState } from "../../redux/reducers";
import { ShopItem } from "../../pages/shop/shop.data";

interface CartDropdownProps {
  cartItems: ShopItem[];
}

const CartDropdown = ({ cartItems }: CartDropdownProps) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'/>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }: StoreState) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);
