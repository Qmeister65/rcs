import React from 'react';
import { Validation, ValidationError } from '@/types';

interface FormProps {
  className: string;
  formRef: React.RefObject<HTMLFormElement>;
  children: React.ReactNode | JSX.Element;
  onSubmit: () => void;
  onError: (errors: ValidationError[]) => void;
  validation: Validation[];
}

class Form extends React.Component<FormProps> {
  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = this.props.validation
      .map((el) => el())
      .filter((el) => el !== undefined) as ValidationError[];
    if (errors.length) {
      this.props.onError(errors);
    } else {
      this.props.onError([]);
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <form className={this.props.className} onSubmit={this.onSubmit} ref={this.props.formRef}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
