import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { User } from 'firebase';

import './header.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { StoreState } from "../../redux/reducers";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

interface HeaderProps {
  currentUser: User | null;
  hidden: boolean;
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

// const mapStateToProps = (state: StoreState) => ({
//   currentUser: state.user.currentUser
// });

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }: StoreState) => ({
  currentUser,
  hidden
})

export default connect(
  mapStateToProps
)(Header);
