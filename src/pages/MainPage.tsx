import React, { useState } from 'react';
import SearchBar from '@/components/searchBar';
import CardAPIList from '@/components/cardAPIList';
import '@/main.scss';

const MainPage: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('searchValue') || '');
  return (
    <div className={'app'}>
      <SearchBar value={value} onChange={(value) => setValue(value)} />
      <CardAPIList />
    </div>
  );
};

export default MainPage;
