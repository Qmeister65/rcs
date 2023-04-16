import React from 'react';
import './popup.scss';
import { PopupProps } from '@/types';
import { createPortal } from 'react-dom';

const Popup: React.FC<PopupProps> = (props) =>
  createPortal(
    <div className="popup" onClick={props.onClick}>
      {props.children}
    </div>,
    document.body
  );

export default Popup;
