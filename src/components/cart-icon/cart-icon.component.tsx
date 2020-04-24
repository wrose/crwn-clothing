import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHidden } from "../../redux/actions";
import { connect } from "react-redux";

interface CartIconProps {
  toggleCartHidden: any;
}

const CartIcon = ({ toggleCartHidden }: CartIconProps) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCartHidden: toggleCartHidden
};

export default connect(null, mapDispatchToProps)(CartIcon);