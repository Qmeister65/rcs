import React from 'react';
import '@/main.scss';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default App;
