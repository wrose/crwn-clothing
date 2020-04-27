import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { StoreState } from "../../store";
import { selectCartItemsCount } from "../../features/cart/selectors";
import { toggleCartHidden } from "../../features/cart/actions";

interface CartIconProps {
  toggleCartHidden?: any;
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

const mapStateToProps = createStructuredSelector<StoreState, CartIconProps>({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = {
  toggleCartHidden: toggleCartHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);