import React, { ButtonHTMLAttributes } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  isGoogleSignIn?: boolean;
}

const CustomButton = ({children, isGoogleSignIn, ...otherProps }: CustomButtonProps) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;