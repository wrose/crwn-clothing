import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { User } from "firebase";
import CheckoutPage from "./pages/checkout/checkout.component";
import { setCurrentUser } from "./features/users/actions";
import { StoreState } from "./store";
import { selectCurrentUser } from "./features/users/selectors";

interface AppProps {
  currentUser: User | null;
  setCurrentUser?: any;
}

class App extends React.Component<AppProps, any> {
  unsubscribeFromAuth?: Function;

  componentDidMount(): void {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(): void {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact
                 path='/signin'
                 render={() =>
                   this.props.currentUser ? (
                     <Redirect to='/'/>
                   ) : (
                     <SignInAndSignUpPage/>
                   )
                 }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<StoreState, AppProps>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  setCurrentUser: setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
