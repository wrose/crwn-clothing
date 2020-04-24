import React, { ButtonHTMLAttributes } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }: CustomButtonProps) => {
  return (
    <button
      className={`
       ${inverted ? 'inverted' : ''} 
       ${isGoogleSignIn ? 'google-sign-in' : ''} 
       custom-button`
      }
      {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;