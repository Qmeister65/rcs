import React from 'react';
import './confirmationMessage.scss';
import { ConfirmationMessageProps } from '@/types';

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = (props) => {
  const onCLick = () => {
    props.onClick();
  };
  return (
    <div className="confirmation-message">
      <h4 className="confirmation-message__h4">The card has been created</h4>
      <button className="confirmation-message__btn" onClick={onCLick}>
        <b>OK</b>
      </button>
    </div>
  );
};

export default ConfirmationMessage;
