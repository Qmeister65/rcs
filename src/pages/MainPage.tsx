import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '@/components/searchBar';
import CardAPIList from '@/components/cardAPIList';
import '@/main.scss';

const MainPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(localStorage.getItem('searchValue') || '');
  useEffect(() => {
    const ref = { ...inputRef };
    return () => {
      localStorage.setItem('searchValue', ref.current?.value || '');
    };
  }, []);
  return (
    <div className={'app'}>
      <SearchBar inputRef={inputRef} value={value} onChange={(value) => setValue(value)} />
      <CardAPIList />
    </div>
  );
};

export default MainPage;
