import React from 'react';
import './popup.scss';
import { PopupProps } from '@/types';

class Popup extends React.Component<PopupProps> {
  render() {
    return <div className="popup">{this.props.children}</div>;
  }
}

export default Popup;
