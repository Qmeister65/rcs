import React from 'react';
import { InputFieldProps } from '@/types';

class InputField extends React.Component<InputFieldProps> {
  render() {
    return (
      <label htmlFor={this.props.id}>
        <input
          id={this.props.id}
          type={this.props.type}
          ref={this.props.refProp}
          value={this.props.value}
          name={this.props.id}
        />
        {this.props.label}
        {this.props.error && <span>{this.props.error}</span>}
      </label>
    );
  }
}

export default InputField;
