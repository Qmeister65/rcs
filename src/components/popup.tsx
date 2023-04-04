import React from 'react';
import './popup.scss';
import { PopupProps } from '@/types';

const Popup: React.FC<PopupProps> = (props) => (
  <div className="popup" onClick={props.onClick}>
    {props.children}
  </div>
);

export default Popup;
