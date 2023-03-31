import React from 'react';
import { InputFieldProps } from '@/types';
import './inputField.scss';

const InputField: React.FC<InputFieldProps> = ({
  accept,
  error,
  id,
  inputStyle,
  label,
  type,
  value,
  name,
  register,
}) => (
  <>
    <label className="inputField" htmlFor={id}>
      <input
        type={type}
        {...(register ? register() : {})}
        id={id}
        value={value}
        name={name}
        className={inputStyle}
        accept={accept}
      />
      {label}
    </label>
    {error && <span className="inputField__error">{error}</span>}
  </>
);

export default InputField;
