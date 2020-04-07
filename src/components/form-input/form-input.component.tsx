import React, { ChangeEvent } from 'react';

import './form-input.styles.scss';

interface FormInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  label?: string;
  value: string;
  required: boolean;
}

const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;