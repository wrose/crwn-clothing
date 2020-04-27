import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { User } from 'firebase';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { StoreState } from "../../store";
import { selectCartHidden } from "../../features/cart/selectors";
import { selectCurrentUser } from "../../features/users/selectors";

interface HeaderProps {
  currentUser?: User | null;
  hidden?: boolean;
}

const Header = ({ currentUser, hidden }: HeaderProps) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null :
        <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector<StoreState, HeaderProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(
  mapStateToProps
)(Header);
