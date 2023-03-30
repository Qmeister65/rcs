import React from 'react';
import { Link } from 'react-router-dom';
import '@/main.scss';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={'page-content'}>
        <div className={'not-found-img'}></div>
        <Link to={'/'}>Return to Main page</Link>
      </div>
    );
  }
}

export default NotFoundPage;
