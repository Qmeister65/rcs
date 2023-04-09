import React from 'react';
import { FormProps } from '@/types';

const Form: React.FC<FormProps> = ({ children, className, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
