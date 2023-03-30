import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => (
  <div className={'header'}>
    <NavLink to={'/'}>Main</NavLink>
    <NavLink to={'/forms'}>Forms</NavLink>
    <NavLink to={'/about'}>About</NavLink>
  </div>
);

export default Header;
