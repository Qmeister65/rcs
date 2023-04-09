import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '@/components/searchBar';
import CardAPIList from '@/components/cardAPIList';
import '@/main.scss';
import axios from 'axios';
import { CardAPIProps } from '@/types';
import Loader from '@/components/loader';

const MainPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [cards, setCards] = useState<CardAPIProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const ref = { ...inputRef };
    setIsLoading(true);
    search(localStorage.getItem('searchValue') || '');
    return () => {
      localStorage.setItem('searchValue', ref.current?.value || '');
    };
  }, []);
  const search = (value: string) => {
    axios
      .get(`https://the-one-api.dev/v2/character?name=/${value}/i`, {
        headers: {
          Authorization: 'Bearer wVHj2Pv5am7yP3fvyAvm',
        },
      })
      .then((r) => {
        setCards(r.data.docs);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
      });
  };
  return (
    <div className={'app'}>
      <SearchBar searchFunc={search} inputRef={inputRef} />
      {isLoading ? <Loader /> : <CardAPIList cards={cards} />}
    </div>
  );
};

export default MainPage;
