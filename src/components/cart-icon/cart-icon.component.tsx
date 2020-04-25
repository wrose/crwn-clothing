import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHidden } from "../../redux/actions";
import { connect } from "react-redux";
import { StoreState } from "../../redux/reducers";
import { selectCartItemsCount } from "../../redux/selectors/cart";
import { createStructuredSelector } from 'reselect';

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