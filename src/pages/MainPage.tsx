import React, { useEffect, useState } from 'react';
import SearchBar from '@/components/searchBar';
import CardsList from '@/components/cardsList';
import data from '@/assets/data.json';
import '@/main.scss';

const MainPage: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('searchValue') || '');
  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', value);
    };
  });
  return (
    <div className={'app'}>
      <SearchBar value={value} onChange={(value) => setValue(value)} />
      <CardsList data={data} />
    </div>
  );
};

export default MainPage;
