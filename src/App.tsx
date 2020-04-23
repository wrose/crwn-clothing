import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser, unsetCurrentUser } from "./redux/actions";
import { StoreState } from "./redux/reducers";

class App extends React.Component<any, any> {
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

const mapStateToProps = ({user}: StoreState) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = {
  setCurrentUser: setCurrentUser,
  unsetCurrentUser: unsetCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
