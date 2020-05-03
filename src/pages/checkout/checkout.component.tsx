import React from 'react';

import './checkout.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { CartItem } from "../../features/shop/data";
import { selectCartItems, selectCartTotal } from "../../features/cart/selectors";
import { StoreState } from "../../store";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

interface CheckoutPageProps {
  cartItems: CartItem[];
  total: number;
}

const CheckoutPage = ({cartItems, total}: CheckoutPageProps) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} item={cartItem}/>
        )
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, CheckoutPageProps>({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
