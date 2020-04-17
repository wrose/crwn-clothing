import React from 'react';

import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;

  [key: string]: any;
}

class SignUp extends React.Component<any, SignUpState> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name='displayName' label='display name' type='text' value={displayName} required/>
          <FormInput handleChange={this.handleChange} name='email' label='email' type='email' value={email} required/>
          <FormInput handleChange={this.handleChange} name='password' label='password' type='password' value={password} required/>
          <FormInput handleChange={this.handleChange} name='confirmPassword' label='confirm password' type='password' value={confirmPassword}
                     required/>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;