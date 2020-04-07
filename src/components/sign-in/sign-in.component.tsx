import React, { Component } from 'react';
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

interface SignInProps {

}

interface SignInState {
  email: string;
  password: string;

  [key: string]: any;
}

class SignIn extends Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required/>

            <div className='buttons'>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomButton>
            </div>
        </form>
      </div>
    );
  }
}

export default SignIn;