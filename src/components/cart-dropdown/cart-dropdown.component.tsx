import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { StoreState } from "../../redux/reducers";

interface CartDropdownProps {
  hidden: boolean;
}

const CartDropdown = ({ hidden }: CartDropdownProps) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'/>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(CartDropdown);