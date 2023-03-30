import React from 'react';
import { InputFieldProps } from '@/types';
import './inputField.scss';

const InputField: React.FC<InputFieldProps> = ({
  accept,
  error,
  id,
  inputStyle,
  label,
  refProp,
  type,
  value,
}) => (
  <>
    <label className="inputField" htmlFor={id}>
      <input
        id={id}
        type={type}
        ref={refProp}
        value={value}
        name={id}
        className={inputStyle}
        accept={accept}
      />
      {label}
    </label>
    {error && <span className="inputField__error">{error}</span>}
  </>
);

export default InputField;
