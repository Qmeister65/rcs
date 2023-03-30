import React from 'react';
import './confirmationMessage.scss';
import { ConfirmationMessageProps } from '@/types';

class ConfirmationMessage extends React.Component<ConfirmationMessageProps> {
  onCLick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="confirmation-message">
        <h4 className="confirmation-message__h4">The card has been created</h4>
        <button className="confirmation-message__btn" onClick={this.onCLick}>
          <b>OK</b>
        </button>
      </div>
    );
  }
}

export default ConfirmationMessage;
