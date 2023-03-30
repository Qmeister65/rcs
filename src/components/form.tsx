import React from 'react';
import { FormProps, ValidationError } from '@/types';

const Form: React.FC<FormProps> = ({
  children,
  className,
  formRef,
  onError,
  onSubmitProp,
  validation,
}) => {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validation
      .map((el) => el())
      .filter((el) => el !== undefined) as ValidationError[];
    if (errors.length) {
      onError(errors);
    } else {
      onError([]);
      onSubmitProp();
    }
  };

  return (
    <form className={className} onSubmit={onSubmit} ref={formRef}>
      {children}
    </form>
  );
};

export default Form;
