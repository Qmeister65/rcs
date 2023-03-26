import React from 'react';
import { InputFieldProps } from '@/types';
import './inputField.scss';

class InputField extends React.Component<InputFieldProps> {
  render() {
    return (
      <>
        <label className="inputField" htmlFor={this.props.id}>
          <input
            id={this.props.id}
            type={this.props.type}
            ref={this.props.refProp}
            value={this.props.value}
            name={this.props.id}
            className={this.props.inputStyle}
          />
          {this.props.label}
        </label>
        {this.props.error && <span className="inputField__error">{this.props.error}</span>}
      </>
    );
  }
}

export default InputField;
