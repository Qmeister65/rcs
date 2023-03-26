import React from 'react';
import '@/main.scss';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
